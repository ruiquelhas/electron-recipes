/* global describe, it */

const { RECEIVE_ERROR, RECEIVE_RECIPE, RECEIVE_RECIPES, REQUEST_RECIPES } = require('../../src/actions/recipes')
const recipes = require('../../src/reducers/recipes')
const assert = require('assert')
const deepFreeze = require('deep-freeze')

describe('recipes reducer', () => {
  it('returns a new state when the application requests the recipes', () => {
    const stateBefore = { items: [] }
    const action = { type: REQUEST_RECIPES }
    const stateAfter = { isFetching: true, items: [] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(recipes(stateBefore, action), stateAfter)
  })

  it('returns a new state when the application receives a recipe', () => {
    const timestamp = Date.now()
    const stateBefore = { items: [] }
    const action = { type: RECEIVE_RECIPE, recipe: { foo: 'bar' }, receivedAt: timestamp }
    const stateAfter = { isFetching: true, items: [{ foo: 'bar' }], lastUpdated: timestamp }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(recipes(stateBefore, action), stateAfter)
  })

  it('returns a new state when the application receives all recipes', () => {
    const timestamp = Date.now()
    const stateBefore = { isFetching: true, items: [{ foo: 'bar' }], lastUpdated: timestamp }
    const action = { type: RECEIVE_RECIPES }
    const stateAfter = { isFetching: false, items: [{ foo: 'bar' }], lastUpdated: timestamp }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(recipes(stateBefore, action), stateAfter)
  })

  it('returns a new state when the application throws an error', () => {
    const error = new Error('foo')
    const stateBefore = { items: [] }
    const action = { type: RECEIVE_ERROR, error }
    const stateAfter = { isFetching: false, error }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(recipes(stateBefore, action), stateAfter)
  })
})
