/* global describe, it */

const recipe = require('../../src/actions/recipe')
const assert = require('assert')

describe('recipe actions', () => {
  it('generates a proper action when a recipe is toggled as favorite', () => {
    const expectedAction = { id: 'foo', isSaving: true, type: recipe.TOGGLE_FAVORITE }
    assert.deepEqual(recipe.toggleFavorite('foo'), expectedAction)
  })

  it('generates a proper thunk when the application tries to update the recipe favorite flag', () => {
    const thunk = recipe.updateFavoriteFlag()
    assert.ok(typeof thunk === 'function')
  })

  it('generates a proper action when a recipe is updated in the database', () => {
    const expectedAction = { id: 'foo', isSaving: false, type: recipe.CONFIRM_RECIPE_UPDATE }
    assert.deepEqual(recipe.confirmRecipeUpdate('foo'), expectedAction)
  })
})
