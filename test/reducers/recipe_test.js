/* global describe, it */

const { recipe, recipes } = require('src/store/actions')
const reducer = require('src/store/reducers/recipe')
const assert = require('assert')
const deepFreeze = require('deep-freeze')

describe('recipe reducer', () => {
  it('returns a new state when an ingredient is added to a new recipe', () => {
    const stateBefore = { ingredients: [] }
    const action = recipe.addIngredient('foo')
    const stateAfter = { ingredients: ['foo'] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when a property is defined on a new recipe', () => {
    const stateBefore = {}
    const action = recipe.setProperty('foo', 'bar')
    const stateAfter = { foo: 'bar' }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when the recipe data is cleared', () => {
    const stateBefore = { difficulty: 2, ingredients: ['foo', 'bar'] }
    const action = recipe.clearData()
    const stateAfter = { difficulty: 1, ingredients: [] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when the difficulty level is determined', () => {
    const stateBefore = { difficulty: 2 }
    const action = recipes.displayRecipeLevel()
    const stateAfter = { difficulty: 2, level: 'Easy' }

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

  it('returns a new state when a recipe is toggled as favorite', () => {
    const stateBefore = { favorite: false }
    const action = recipe.toggleFavorite()
    const stateAfter = { isSaving: true, favorite: true }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })
})
