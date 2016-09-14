/* global describe, it */

const actions = require('store/actions/filters')
const assert = require('assert')

describe('filters actions', () => {
  it('creates an action when a favorite filter is enabled', () => {
    const expectedAction = {
      type: 'SET_FAVORITE_FILTER'
    }

    assert.deepEqual(actions.setFavoriteFilter(), expectedAction)
  })

  it('creates an action when a difficulty filter is toggled', () => {
    const expectedAction = {
      type: 'TOGGLE_DIFFICULTY_FILTER'
    }

    assert.deepEqual(actions.toggleDifficultyFilter(), expectedAction)
  })

  it('creates an action when the ingredient filter is updated', () => {
    const expectedAction = {
      type: 'UPDATE_INGREDIENT_FILTER',
      payload: {
        filter: ['foo', 'bar']
      }
    }

    assert.deepEqual(actions.updateIngredientFilter('foo, bar'), expectedAction)
  })
})
