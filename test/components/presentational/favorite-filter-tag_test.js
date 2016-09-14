/* global afterEach, before, describe, it */

const FavoriteFilterTag = require('src/components/presentational/favorite-filter-tag')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<FavoriteFilterTag />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a `a` element', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTag />)
    assert.ok(wrapper.is('a'))
  })

  it('renders the element with the proper class', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTag />)
    assert.ok(wrapper.hasClass('filterOption'))
  })

  it('renders an element with the proper children', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTag children={['foo']} />)
    assert.equal(wrapper.text(), 'foo')
  })

  it('invokes the provided callback when it is clicked', () => {
    const callback = sinon.spy()
    const wrapper = enzyme.shallow(<FavoriteFilterTag onClick={callback} />)
    wrapper.simulate('click')
    assert.equal(callback.callCount, 1)
  })
})
