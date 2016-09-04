/* global afterEach, before, beforeEach, describe, it */

const { Application } = require('spectron')
const { seeder } = require('../src/helpers')
const db = require('../src/database')
const assert = require('assert')
const path = require('path')
const pkg = require('../package.json')

describe('electron-recipes', function () {
  let app, options

  before(() => {
    options = {
      args: [
        path.join(__dirname, '..', 'main.js')
      ],
      path: path.join(__dirname, '..', 'node_modules', '.bin', 'electron')
    }
  })

  afterEach(() => {
    if (!app || !app.isRunning()) {
      return db.destroy()
    }

    return app.stop()
      .then(() => {
        return db.destroy()
      })
  })

  describe('basic setup', () => {
    beforeEach(() => {
      app = new Application(options)

      return app.start()
    })

    it('opens the app main window', () => {
      return app.client
        .waitUntilWindowLoaded()
        .then(() => {
          return app.client.getWindowCount()
        })
        .then(count => {
          assert.equal(count, 1)
        })
        .getText('.title')
        .then(text => {
          assert.equal(text, `${pkg.name} (v${pkg.version})`)
        })
    })
  })

  describe('recipe list', () => {
    let recipes

    beforeEach(() => {
      app = new Application(options)

      return seeder.random(2)
        .then((instances) => {
          recipes = instances

          return app.start()
        })
    })

    it('displays the existing recipes in the main window', () => {
      const expectedTitles = recipes.map(({ title }) => title).sort()

      return app.client
        .waitUntilWindowLoaded()
        .then(() => {
          return app.client.elements('.recipeTitle')
        })
        .then(({ value }) => {
          assert.equal(value.length, 2)
          // Get all titles (text)
          return Promise.all(value.map(({ ELEMENT }) => {
            return app.client.elementIdText(ELEMENT)
          }))
        })
        .then(titles => {
          const actualTitles = titles.map(({ value }) => value).sort()
          assert.deepEqual(actualTitles, expectedTitles)
        })
    })
  })

  describe('difficulty mapping', () => {
    beforeEach(() => {
      app = new Application(options)

      return seeder.single({ difficulty: 2 })
        .then(() => {
          return app.start()
        })
    })

    it('displays the level of the existing recipes', () => {
      return app.client
        .waitUntilWindowLoaded()
        .then(() => {
          return app.client.getText('.recipeLevel')
        })
        .then(text => {
          assert.equal(text, 'Easy')
        })
    })
  })

  describe('set or unset a recipe as favorite', () => {
    beforeEach(() => {
      app = new Application(options)

      return seeder.single({ favorite: false })
        .then(() => {
          return app.start()
        })
    })

    it('updates a recipe in the database when the user clicks on the "favorite" checkbox', () => {
      return app.client
        .waitUntilWindowLoaded()
        .then(() => {
          return app.client.getAttribute('.favoriteToggle', 'checked')
        })
        .then(attr => {
          assert.equal(attr, null)
        })
        .click('.favoriteToggle')
        .then(() => {
          return app.client.getAttribute('.favoriteToggle', 'checked')
        })
        .then(attr => {
          assert.equal(attr, 'true')
        })
        .waitUntil(() => {
          return app.client.getAttribute('.favoriteToggle', 'data-up-to-date')
        })
        .then(attr => {
          return attr === 'true'
        }, 5000)
    })
  })

  describe('filter list of recipes by favorite flag', () => {
    beforeEach(() => {
      app = new Application(options)

      return seeder.single({ favorite: false })
        .then(() => {
          return app.start()
        })
    })

    it('applies the filter for the existing recipe', () => {
      return app.client
        .waitUntilWindowLoaded()
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 1)
          // Show both favorite and regular recipes
          return app.client.click('#favoriteFilterTag_SHOW_ALL')
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 1)
          // Show favorite recipes
          return app.client.click('#favoriteFilterTag_SHOW_FAVORITES')
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 0)
          // Show regular recipes
          return app.client.click('#favoriteFilterTag_SHOW_REGULARS')
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert(value.length, 1)
        })
    })
  })

  describe('filter list of recipes by difficulty', () => {
    beforeEach(() => {
      app = new Application(options)

      return seeder.single({ difficulty: 2 })
        .then(() => {
          return app.start()
        })
    })

    it('applies all filters for the existing recipe', () => {
      return app.client
        .waitUntilWindowLoaded()
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 1)
          // Hide "Very Easy" recipes
          return app.client.click('#difficultyFilterToggle_VERY_EASY')
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 1)
          // Hide "Easy" recipes
          return app.client.click('#difficultyFilterToggle_EASY')
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 0)
          // Hide "Average" recipes
          return app.client.click('#difficultyFilterToggle_AVERAGE')
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 0)
          // Hide "Hard" recipes
          return app.client.click('#difficultyFilterToggle_HARD')
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 0)
          // Hide "Very Hard" recipes
          return app.client.click('#difficultyFilterToggle_VERY_HARD')
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 0)
          // Show "Easy" recipes
          return app.client.click('#difficultyFilterToggle_EASY')
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 1)
        })
    })
  })

  describe('filter list of recipes by ingredient name', () => {
    beforeEach(() => {
      app = new Application(options)

      return seeder.single({ ingredients: ['foo', 'bar'] })
        .then(() => {
          return app.start()
        })
    })

    it('applies all filters for the existing recipe', () => {
      return app.client
        .waitUntilWindowLoaded()
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 1)
          // Show recipes with ingredients "foo" or "bar"
          return app.client.setValue('#ingredientFilterInput', 'foo, bar')
        })
        .then(() => {
          return app.client.waitUntil(
            app.client.getValue('#ingredientFilterInput').then(value => value === 'foo, bar')
          )
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 1)
          // Show recipes with ingredients "baz"
          return app.client.setValue('#ingredientFilterInput', 'baz')
        })
        .then(() => {
          return app.client.waitUntil(
            app.client.getValue('#ingredientFilterInput').then(value => value === 'baz')
          )
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 0)
          // Remove ingredient filter
          return app.client.setValue('#ingredientFilterInput', 'bar')
        })
        .then(() => {
          return app.client.waitUntil(
            app.client.getValue('#ingredientFilterInput').then(value => value === 'bar')
          )
        })
        .then(() => {
          return app.client.elements('.recipe')
        })
        .then(({ value }) => {
          assert.equal(value.length, 1)
        })
    })
  })
})
