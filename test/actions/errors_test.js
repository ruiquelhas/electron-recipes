/* global describe, it */

const errors = require('../../src/actions/errors')
const assert = require('assert')

describe('errors actions', () => {
  it('generates a proper action when the application throws an error', () => {
    const error = new Error()
    const actualAction = errors.receiveError(error)
    assert.equal(actualAction.type, errors.RECEIVE_ERROR)
    assert.equal(actualAction.error, error)
  })
})
