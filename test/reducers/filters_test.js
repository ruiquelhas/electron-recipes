/* global describe, it */

const { filters } = require('src/store/actions')
const reducer = require('src/store/reducers/filters')
const assert = require('assert')
const deepFreeze = require('deep-freeze')

describe('filters reducer', () => {
  it('returns a new state when a favorite filter is toggled', () => {
    const stateBefore = { favorite: 'bar' }
    const action = filters.setFavoriteFilter('baz')
    const stateAfter = { favorite: 'baz' }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when a difficulty filter is enabled', () => {
    const stateBefore = { difficulty: { foo: true, bar: true } }
    const action = filters.toggleDifficultyFilter('bar')
    const stateAfter = { difficulty: { foo: true, bar: false } }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when a difficulty filter is disabled', () => {
    const stateBefore = { difficulty: { foo: false, bar: false } }
    const action = filters.toggleDifficultyFilter('foo')
    const stateAfter = { difficulty: { foo: true, bar: false } }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when filtering by ingredient name', () => {
    const stateBefore = { ingredients: [] }
    const action = filters.updateIngredientFilter('foo, bar')
    const stateAfter = { ingredients: ['foo', 'bar'] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })
})
