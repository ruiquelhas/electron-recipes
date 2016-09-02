/* global describe, it */

const recipes = require('../../src/actions/recipes')
const assert = require('assert')

describe('recipes actions', () => {
  it('generates a proper action when the application requests the recipes', () => {
    const expectedAction = { type: recipes.REQUEST_RECIPES }
    assert.deepEqual(recipes.requestRecipes(), expectedAction)
  })

  it('generates a proper action when the application receives a recipes', () => {
    const recipe = { foo: 'bar' }
    const actualAction = recipes.receiveRecipe(recipe)
    assert.equal(actualAction.type, recipes.RECEIVE_RECIPE)
    assert.equal(actualAction.recipe, recipe)
    assert.ok(actualAction.receivedAt <= Date.now())
  })

  it('generates a proper action when the application receives all recipes', () => {
    const actualAction = recipes.receiveRecipes()
    assert.equal(actualAction.type, recipes.RECEIVE_RECIPES)
    assert.ok(actualAction.receivedAt <= Date.now())
  })

  it('generates a proper action when a recipe difficulty is translated to level', () => {
    const expectedAction = { type: recipes.DISPLAY_RECIPE_LEVEL }
    assert.deepEqual(recipes.displayRecipeLevel(), expectedAction)
  })

  it('generates a proper thunk when the application fetches the recipes', () => {
    const thunk = recipes.fetchRecipes()
    assert.ok(typeof thunk === 'function')
  })
})
