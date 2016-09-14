/* global describe, it */

const React = require('react')
const Title = require('components/presentational/title')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<Title />', () => {
  it('renders a `h1` element', () => {
    const wrapper = enzyme.shallow(<Title />)
    assert.ok(wrapper.is('h1'))
  })

  it('renders an element with the proper id', () => {
    const wrapper = enzyme.shallow(<Title />)
    assert.ok(wrapper.is('#title'))
  })

  it('renders an element with given children', () => {
    const wrapper = enzyme.shallow(<Title>foo</Title>)
    assert.equal(wrapper.text(), 'foo')
  })
})
