/* global describe, it */

const DifficultyFilter = require('components/container/difficulty-filter')
const FavoriteFilter = require('components/container/favorite-filter')
const IngredientFilter = require('components/container/ingredient-filter')
const NewRecipeForm = require('components/container/new-recipe-form')
const React = require('react')
const RecipeApp = require('components/main')
const Title = require('components/presentational/title')
const VisibleRecipeList = require('components/container/visible-recipe-list')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<RecipeApp />', () => {
  it('renders the content wrapped in a div', () => {
    const wrapper = enzyme.shallow(<RecipeApp title='foo' />)
    assert.ok(wrapper.is('div'))
  })

  it('renders a <Title /> component', () => {
    const wrapper = enzyme.shallow(<RecipeApp />)
    assert.ok(wrapper.children().someWhere(component => component.type() === Title))
  })

  it('renders a <NewRecipeForm /> component', () => {
    const wrapper = enzyme.shallow(<RecipeApp />)
    assert.ok(wrapper.children().someWhere(component => component.type() === NewRecipeForm))
  })

  it('renders a <FavoriteFilter /> component', () => {
    const wrapper = enzyme.shallow(<RecipeApp />)
    assert.ok(wrapper.children().someWhere(component => component.type() === FavoriteFilter))
  })

  it('renders a <DifficultyFilter /> component', () => {
    const wrapper = enzyme.shallow(<RecipeApp />)
    assert.ok(wrapper.children().someWhere(component => component.type() === DifficultyFilter))
  })

  it('renders a <IngredientFilter /> component', () => {
    const wrapper = enzyme.shallow(<RecipeApp />)
    assert.ok(wrapper.children().someWhere(component => component.type() === IngredientFilter))
  })

  it('renders a <VisibleRecipeList /> component', () => {
    const wrapper = enzyme.shallow(<RecipeApp />)
    assert.ok(wrapper.children().someWhere(component => component.type() === VisibleRecipeList))
  })
})
