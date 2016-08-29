/* global describe, it */

const React = require('react')
const Title = require('../../src/components/title')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<Title />', () => {
  it('should render an `h1` with the title text', () => {
    const wrapper = enzyme.shallow(<Title />)
    assert.equal(wrapper.find('h1').first().text(), 'Electron Recipes')
  })
})
