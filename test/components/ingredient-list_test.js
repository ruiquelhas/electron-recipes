/* global describe, it */

const React = require('react')
const Ingredient = require('../../src/components/ingredient')
const IngredientList = require('../../src/components/ingredient-list')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<IngredientList />', () => {
  it('renders the content wrapped in a div', () => {
    const wrapper = enzyme.shallow(<IngredientList parent='foo' ingredients={[]} />)
    assert.ok(wrapper.is('div'))
  })

  it('renders a proper list label', () => {
    const wrapper = enzyme.shallow(<IngredientList parent='foo' ingredients={[]} />)
    assert.equal(wrapper.find('.listLabel').text(), 'Ingredients:')
  })

  it('renders the list as a `ul` element', () => {
    const wrapper = enzyme.shallow(<IngredientList parent='foo' ingredients={[]} />)
    assert.equal(wrapper.find('ul').length, 1)
  })

  it('renders an element with the proper class', () => {
    const wrapper = enzyme.shallow(<IngredientList parent='foo' ingredients={[]} />)
    assert.ok(wrapper.find('ul').hasClass('ingredientList'))
  })

  it('renders an element containing the proper component types', () => {
    const wrapper = enzyme.shallow(<IngredientList parent='foo' ingredients={[]} />)
    wrapper.find('.ingredientList').children().forEach(component => assert.equal(component.type(), Ingredient))
  })

  it('renders the list components with the correct properties', () => {
    const wrapper = enzyme.shallow(<IngredientList parent='foo' ingredients={['bar']} />)
    assert.deepEqual(wrapper.find('.ingredientList').childAt(0).props(), { name: 'bar' })
  })

  it('renders the list components with the correct React key', () => {
    const wrapper = enzyme.shallow(<IngredientList parent='foo' ingredients={[{ id: 'bar' }]} />)
    assert.equal(wrapper.find('.ingredientList').childAt(0).key(), 'foo-0')
  })
})
