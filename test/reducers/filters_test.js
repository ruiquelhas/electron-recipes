/* global describe, it */

const { filters } = require('../../src/store/actions')
const reducer = require('../../src/store/reducers/filters')
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
    const stateBefore = { difficulty: ['foo'] }
    const action = filters.setDifficultyFilter('bar', false)
    const stateAfter = { favorite: ['foo', 'bar'] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })

  it('returns a new state when a difficulty filter is disabled', () => {
    const stateBefore = { difficulty: ['foo', 'bar'] }
    const action = filters.setDifficultyFilter('foo', true)
    const stateAfter = { favorite: ['bar'] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })
})
