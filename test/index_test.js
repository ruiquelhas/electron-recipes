/* global afterEach, before, beforeEach, describe, it */

const { Application } = require('spectron')
const { seeder } = require('../src/helpers')
const db = require('../src/database')
const assert = require('assert')
const path = require('path')
const pkg = require('../package.json')

describe('electron-recipes', function () {
  let app

  before(() => {
    app = new Application({
      args: [
        path.join(__dirname, '..', 'main.js')
      ],
      path: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
      startTimeout: 15000,
      waitTimeout: 20000
    })

    return db.destroy()
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
      return app.start()
    })

    it('opens the app main window', () => {
      return app.client
        .waitUntilWindowLoaded()
        .getWindowCount()
        .then(count => assert.equal(count, 1))
        .getText('.title')
        .then(text => assert.equal(text, `${pkg.name} (v${pkg.version})`))
    })
  })

  describe('database integration', () => {
    let recipe

    beforeEach(() => {
      return seeder.single({ favorite: false })
        .then(instance => {
          recipe = instance
        })
        .then(() => {
          return app.start()
        })
    })

    describe('recipe list', () => {
      it('displays the existing recipes in the main window', () => {
        return app.client
          .waitUntilWindowLoaded()
          .elements('.recipe')
          .then(elements => {
            assert.equal(elements.value.length, 1)
          })
          .getText('.recipeTitle')
          .then(text => {
            assert.equal(text, recipe.title)
          })
          .getText('.recipeDescription')
          .then(text => {
            assert.equal(text, recipe.description)
          })
      })
    })

    describe('set or unset a recipe as favorite', () => {
      it('updates a recipe in the database when the user clicks on the "favorite" checkbox', () => {
        return app.client
          .waitUntilWindowLoaded()
          .getAttribute('.favoriteToggle', 'checked')
          .then(attr => {
            assert.equal(attr, null)
          })
          .click('.favoriteToggle')
          .then(() => {
            return app.stop()
          })
          .then(() => {
            return app.start()
          })
          .then(() => {
            return app.client.waitUntilWindowLoaded().getAttribute('.favoriteToggle', 'checked')
          })
          .then(attr => {
            assert.equal(attr, 'true')
          })
      })
    })
  })
})
