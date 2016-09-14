/* global describe, it */

const { recipe, recipes } = require('src/store/actions')
const reducer = require('src/store/reducers/recipes')
const assert = require('assert')
const deepFreeze = require('deep-freeze')

describe('recipes reducer', () => {
  it('returns a new state when the application requests the recipes', () => {
    const stateBefore = { items: [] }
    const action = recipes.requestRecipes()
    const stateAfter = { isFetching: true, items: [] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when the application receives a recipe', () => {
    const timestamp = Date.now()
    const stateBefore = { isFetching: true, items: [] }
    const action = recipes.receiveRecipe({ foo: 'bar' }, timestamp)
    const stateAfter = { isFetching: true, items: [{ foo: 'bar' }], lastUpdated: timestamp }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when the application receives all recipes', () => {
    const timestamp = Date.now()
    const stateBefore = { isFetching: true, items: [{ foo: 'bar' }], lastUpdated: timestamp }
    const action = recipes.receiveRecipes(timestamp)
    const stateAfter = { isFetching: false, items: [{ foo: 'bar' }], lastUpdated: timestamp }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when a recipe is set as favorite', () => {
    const stateBefore = { isFetching: false, items: [{ id: 'foo', favorite: false }] }
    const action = recipe.toggleFavorite('foo')
    const stateAfter = { isFetching: false, items: [{ id: 'foo', favorite: true, isSaving: true }] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when a recipe is updated in the database', () => {
    const stateBefore = { isFetching: false, items: [{ id: 'foo', favorite: false, isSaving: true }] }
    const action = recipe.confirmRecipeUpdate('foo')
    const stateAfter = { isFetching: false, items: [{ id: 'foo', favorite: true, isSaving: false }] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when a recipe difficulty is translated to level', () => {
    const stateBefore = { items: [{ difficulty: 1 }] }
    const action = recipes.displayRecipeLevel()
    const stateAfter = { items: [{ difficulty: 1, level: 'Very Easy' }] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })
})
