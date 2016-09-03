/* global describe, it */

const { recipe } = require('../../src/store/actions')
const reducer = require('../../src/store/reducers/recipe')
const assert = require('assert')
const deepFreeze = require('deep-freeze')

describe('recipe reducer', () => {
  it('returns a new state when a recipe is toggled as favorite', () => {
    const stateBefore = { favorite: false }
    const action = recipe.toggleFavorite()
    const stateAfter = { isSaving: true, favorite: true }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when a recipe is updated in the database', () => {
    const stateBefore = { id: 'foo', isSaving: true, favorite: true }
    const action = recipe.confirmRecipeUpdate('foo')
    const stateAfter = { id: 'foo', isSaving: false, favorite: true }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })
})
