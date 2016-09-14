/* global describe, it */

const Ingredient = require('components/presentational/ingredient')
const IngredientList = require('components/presentational/ingredient-list')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<IngredientList />', () => {
  it('renders the content wrapped in a div', () => {
    const wrapper = enzyme.shallow(<IngredientList id='foo' ingredients={[]} />)
    assert.ok(wrapper.is('div'))
  })

  it('renders a proper list label', () => {
    const wrapper = enzyme.shallow(<IngredientList />)
    assert.equal(wrapper.find('.listLabel').text(), 'Ingredients:')
  })

  it('renders the list as a `ul` element', () => {
    const wrapper = enzyme.shallow(<IngredientList />)
    assert.equal(wrapper.find('ul').length, 1)
  })

  it('renders an element with the proper class', () => {
    const wrapper = enzyme.shallow(<IngredientList />)
    assert.ok(wrapper.find('ul').hasClass('ingredientList'))
  })

  it('renders an element containing the proper component types', () => {
    const wrapper = enzyme.shallow(<IngredientList id='foo' ingredients={['bar']} />)
    wrapper.find('ul').children().everyWhere(component => assert.equal(component.type(), Ingredient))
  })

  it('renders the list components with the correct properties', () => {
    const wrapper = enzyme.shallow(<IngredientList id='foo' ingredients={['bar']} />)
    assert.deepEqual(wrapper.find('ul').childAt(0).props(), { children: 'bar' })
  })

  it('renders the list components with the correct React key', () => {
    const wrapper = enzyme.shallow(<IngredientList id='foo' ingredients={['bar']} />)
    assert.equal(wrapper.find('ul').childAt(0).key(), 'foo-0')
  })
})
