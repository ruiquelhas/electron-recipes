/* global describe, it */

const React = require('react')
const FavoriteFilterTag = require('../../src/components/favorite-filter-tag')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<FavoriteFilterTag />', () => {
  it('renders a `a` element', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTag />)
    assert.ok(wrapper.is('a'))
  })

  it('renders an element with the proper children', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTag children={['foo']} />)
    assert.equal(wrapper.text(), 'foo')
  })

  it('renders the element with the proper class', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTag />)
    assert.ok(wrapper.hasClass('favoriteFilterTag'))
  })

  it('renders the checkbox with the proper id', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTag filter='foo' />)
    assert.ok(wrapper.is('#favoriteFilterTag_foo'))
  })
})
