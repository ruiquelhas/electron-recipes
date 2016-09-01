/* global afterEach, before, beforeEach, describe, it */

const { Application } = require('spectron')
const assert = require('assert')
const path = require('path')
const pkg = require('../package.json')

const storage = require('../src/storage')
const fixtures = require('../src/helpers/fixtures')

describe('electron-recipes', function () {
  let app

  before(() => {
    app = new Application({
      path: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
      args: [
        path.join(__dirname, '..', 'main.js')
      ],
      waitTimeout: 10000
    })
  })

  afterEach(() => {
    if (!app || !app.isRunning()) {
      return storage.clean(process.env.NODE_ENV)
    }

    return app.stop()
      .then(() => {
        return storage.clean(process.env.NODE_ENV)
      })
  })

  describe('basic setup', () => {
    beforeEach(() => {
      return app.start()
    })

    it('opens the app\'s main window', () => {
      return app.client
        .waitUntilWindowLoaded()
        .getWindowCount()
        .then(count => assert.equal(count, 1))
        .getText('.title')
        .then(text => assert.equal(text, `${pkg.name} (v${pkg.version})`))
    })
  })

  describe('recipe list', () => {
    let recipe

    beforeEach(() => {
      return storage.connect(process.env.NODE_ENV)
        .then((db) => {
          recipe = fixtures.createRecipe()
          return storage.put(db, recipe.id, recipe)
        })
        .then((db) => {
          // The mocha process must release the database lock.
          return storage.disconnect(db)
        })
        .then(() => {
          return app.start()
        })
    })

    it('displays the existing recipes in the apps\'s main window', () => {
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
})
