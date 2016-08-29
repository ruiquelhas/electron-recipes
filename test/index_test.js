/* global afterEach, beforeEach, describe, it */

const { Application } = require('spectron')
const assert = require('assert')
const path = require('path')

describe('electron-recipes', function () {
  let app

  beforeEach(() => {
    app = new Application({
      path: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
      args: [
        path.join(__dirname, '..', 'main.js')
      ],
      waitTimeout: 10000
    })

    return app.start()
  })

  afterEach(() => {
    if (app && app.isRunning()) {
      return app.stop()
    }
  })

  it('opens a window with the list of recipes', () => {
    return app.client
      .getWindowCount()
      .then(count => assert.equal(count, 1))
      .getText('h1')
      .then(text => assert.equal(text, 'Electron Recipes'))
  })
})
