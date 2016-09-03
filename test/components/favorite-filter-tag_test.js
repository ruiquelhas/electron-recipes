/* global describe, it */

const React = require('react')
const FavoriteFilterTag = require('../../src/components/favorite-filter-tag')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<FavoriteFilterTag />', () => {
  it('renders a `a` element', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTag id='foo' />)
    assert.ok(wrapper.is('a'))
  })

  it('renders an element with the proper children', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTag children={['foo']} />)
    assert.equal(wrapper.text(), 'foo')
  })
})
