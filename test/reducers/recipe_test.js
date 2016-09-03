/* global describe, it */

const { CONFIRM_RECIPE_UPDATE, RECEIVE_ERROR, TOGGLE_FAVORITE, DISPLAY_RECIPE_LEVEL } = require('../../src/actions/recipe')
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
    const stateBefore = { id: 'foo', isSaving: true, favorite: true }
    const action = { id: 'foo', type: CONFIRM_RECIPE_UPDATE }
    const stateAfter = { id: 'foo', isSaving: false, favorite: true }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(recipe(stateBefore, action), stateAfter)
  })

  it('returns a new state when a recipe difficulty is translated to level', () => {
    const stateBefore = { difficulty: 1 }
    const action = { type: DISPLAY_RECIPE_LEVEL }
    const stateAfter = { difficulty: 1, level: 'Very Easy' }

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
