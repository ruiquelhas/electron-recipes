/* global describe, it */

const Ingredient = require('components/presentational/ingredient')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<Ingredient />', () => {
  it('renders a `li` element', () => {
    const wrapper = enzyme.shallow(<Ingredient />)
    assert.ok(wrapper.is('li'))
  })

  it('renders an element with the proper class', () => {
    const wrapper = enzyme.shallow(<Ingredient />)
    assert.ok(wrapper.hasClass('ingredient'))
  })

  it('renders an element with the provided children', () => {
    const wrapper = enzyme.shallow(<Ingredient>foo</Ingredient>)
    assert.equal(wrapper.text(), 'foo')
  })
})
