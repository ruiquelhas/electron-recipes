/* global describe, it */

const React = require('react')
const Title = require('../../src/components/title')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<Title />', () => {
  it('renders a `h1` element', () => {
    const wrapper = enzyme.shallow(<Title />)
    assert.ok(wrapper.is('h1'))
  })

  it('renders an element with the proper class', () => {
    const wrapper = enzyme.shallow(<Title />)
    assert.ok(wrapper.hasClass('title'))
  })

  it('renders an element with some custom text', () => {
    const wrapper = enzyme.shallow(<Title text='foo' />)
    assert.equal(wrapper.text(), 'foo')
  })
})
