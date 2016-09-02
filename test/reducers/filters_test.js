/* global describe, it */

const { SET_VISIBILITY_FILTER } = require('../../src/actions/filters')
const filters = require('../../src/reducers/filters')
const assert = require('assert')
const deepFreeze = require('deep-freeze')

describe('filters reducer', () => {
  it('returns a new state when a recipe is toggled as favorite', () => {
    const stateBefore = { foo: 'bar' }
    const action = { type: SET_VISIBILITY_FILTER, context: 'foo', filter: 'baz' }
    const stateAfter = { foo: 'baz' }

    deepFreeze(stateBefore)
    deepFreeze(action)

    assert(filters(stateBefore, action), stateAfter)
  })
})
