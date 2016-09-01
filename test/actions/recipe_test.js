/* global describe, it */

const recipe = require('../../src/actions/recipe')
const assert = require('assert')

describe('recipe actions', () => {
  it('generates a proper action when a recipe is toggled as favorite', () => {
    const expectedAction = { isSaving: true, type: recipe.TOGGLE_FAVORITE }
    assert.deepEqual(recipe.toggleFavorite(), expectedAction)
  })

  it('generates a proper thunk when the application saves the recipe to the database', () => {
    const thunk = recipe.saveRecipe()
    assert.ok(typeof thunk === 'function')
  })

  it('generates a proper action when a recipe is updated in the database', () => {
    const expectedAction = { isSaving: false, type: recipe.CONFIRM_RECIPE_UPDATE }
    assert.deepEqual(recipe.confirmRecipeUpdate(), expectedAction)
  })
})
