/* global describe, it */

const FavoriteToggle = require('src/components/presentational/favorite-toggle')
const IngredientList = require('src/components/presentational/ingredient-list')
const React = require('react')
const Recipe = require('src/components/presentational/recipe')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<Recipe />', () => {
  it('renders a `li` element', () => {
    const wrapper = enzyme.shallow(<Recipe />)
    assert.ok(wrapper.is('li'))
  })

  it('renders an element with the proper class', () => {
    const wrapper = enzyme.shallow(<Recipe />)
    assert.ok(wrapper.hasClass('recipe'))
  })

  it('renders the title of the recipe', () => {
    const wrapper = enzyme.shallow(<Recipe title='bar' />)
    assert.equal(wrapper.find('.recipeTitle').text(), 'bar')
  })

  it('renders the description of the recipe', () => {
    const wrapper = enzyme.shallow(<Recipe description='bar' />)
    assert.equal(wrapper.find('.recipeDescription').text(), 'bar')
  })

  it('renders the difficulty of the recipe', () => {
    const wrapper = enzyme.shallow(<Recipe level='foo' />)
    assert.equal(wrapper.find('.recipeLevel').text(), 'foo')
  })

  it('renders an <IngredientList /> component', () => {
    const wrapper = enzyme.shallow(<Recipe />)
    assert.ok(wrapper.children().someWhere(component => component.type() === IngredientList))
  })

  it('renders an <FavoriteToggle /> component', () => {
    const wrapper = enzyme.shallow(<Recipe />)
    assert.ok(wrapper.children().someWhere(component => component.type() === FavoriteToggle))
  })
})
