/* global describe, it */

const FavoriteToggle = require('../../src/components/favorite-toggle')
const IngredientList = require('../../src/components/ingredient-list')
const React = require('react')
const Recipe = require('../../src/components/recipe')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<Recipe />', () => {
  it('renders a `li` element', () => {
    const wrapper = enzyme.shallow(<Recipe id='foo' />)
    assert.ok(wrapper.is('li'))
  })

  it('renders an element with the proper class', () => {
    const wrapper = enzyme.shallow(<Recipe id='foo' />)
    assert.ok(wrapper.hasClass('recipe'))
  })

  it('renders the title of the recipe', () => {
    const wrapper = enzyme.shallow(<Recipe id='foo' title='bar' />)
    assert.equal(wrapper.find('.recipeTitle').text(), 'bar')
  })

  it('renders the description of the recipe', () => {
    const wrapper = enzyme.shallow(<Recipe id='foo' description='bar' />)
    assert.equal(wrapper.find('.recipeDescription').text(), 'bar')
  })

  it('renders the difficulty of the recipe', () => {
    const wrapper = enzyme.shallow(<Recipe id='foo' difficulty={1} />)
    assert.equal(wrapper.find('.recipeDifficulty').text(), 1)
  })

  it('renders an <IngredientList /> component', () => {
    const wrapper = enzyme.shallow(<Recipe id='foo' />)
    assert.ok(wrapper.find('.recipeDetails').children().someWhere(component => component.type() === IngredientList))
  })

  it('renders an <FavoriteToggle /> component', () => {
    const wrapper = enzyme.shallow(<Recipe id='foo' />)
    assert.ok(wrapper.find('.recipeDetails').children().someWhere(component => component.type() === FavoriteToggle))
  })
})
