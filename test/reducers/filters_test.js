/* global describe, it */

const { filters } = require('../../src/store/actions')
const reducer = require('../../src/store/reducers/filters')
const assert = require('assert')
const deepFreeze = require('deep-freeze')

describe('filters reducer', () => {
  it('returns a new state when a recipe is toggled as favorite', () => {
    const stateBefore = { foo: 'bar' }
    const action = filters.setVisibilityFilter('foo', 'baz')
    const stateAfter = { foo: 'baz' }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(reducer(stateBefore, action), stateAfter)
  })
})
