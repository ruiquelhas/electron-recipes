/* global describe, it */

const React = require('react')
const IngredientFilterInput = require('../../src/components/ingredient-filter-input')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<IngredientFilterInput />', () => {
  it('renders a `p` element', () => {
    const wrapper = enzyme.shallow(<IngredientFilterInput />)
    assert.ok(wrapper.is('p'))
  })

  it('renders an element with the proper children', () => {
    const wrapper = enzyme.shallow(<IngredientFilterInput />)
    assert.equal(wrapper.children().filterWhere(component => component.is('input[type="text"]')).length, 1)
  })
})
