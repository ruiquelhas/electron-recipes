/* global describe, it */

const { CONFIRM_RECIPE_UPDATE, RECEIVE_ERROR, TOGGLE_FAVORITE } = require('../../src/actions/recipe')
const recipe = require('../../src/reducers/recipe')
const assert = require('assert')
const deepFreeze = require('deep-freeze')

describe('recipe reducer', () => {
  it('returns a new state when a recipe is toggled as favorite', () => {
    const stateBefore = { favorite: false }
    const action = { type: TOGGLE_FAVORITE }
    const stateAfter = { isSaving: true, favorite: true }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(recipe(stateBefore, action), stateAfter)
  })

  it('returns a new state when a recipe is updated in the database', () => {
    const stateBefore = { favorite: true }
    const action = { type: CONFIRM_RECIPE_UPDATE }
    const stateAfter = { isSaving: true, favorite: true }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(recipe(stateBefore, action), stateAfter)
  })

  it('returns a new state when the application throws an error', () => {
    const error = new Error('foo')
    const stateBefore = { }
    const action = { type: RECEIVE_ERROR, error }
    const stateAfter = { error }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(recipe(stateBefore, action), stateAfter)
  })
})
