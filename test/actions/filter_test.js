/* global describe, it */

const filters = require('../../src/actions/filters')
const assert = require('assert')

describe('filters actions', () => {
  it('generates a proper action when a filter is enabled', () => {
    const expectedAction = { type: filters.SET_VISIBILITY_FILTER, scope: 'foo', filter: 'bar' }
    assert.deepEqual(filters.setVisibilityFilter('foo', 'bar'), expectedAction)
  })
})
