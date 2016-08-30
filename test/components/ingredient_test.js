/* global describe, it */

const Ingredient = require('../../src/components/ingredient')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<Ingredient />', () => {
  it('renders a `li` element', () => {
    const wrapper = enzyme.shallow(<Ingredient name='foo' />)
    assert.ok(wrapper.is('li'))
  })

  it('renders an element with the correct content', () => {
    const wrapper = enzyme.shallow(<Ingredient name='foo' />)
    assert.equal(wrapper.text(), 'foo')
  })
})
