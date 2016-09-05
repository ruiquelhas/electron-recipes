/* global describe, it */

const DifficultyFilterToggleList = require('../../src/components/difficulty-filter-toggle-list')
const FavoriteFilterTagList = require('../../src/components/favorite-filter-tag-list')
const IngredientFilterInput = require('../../src/components/ingredient-filter-input')
const NewRecipeForm = require('../../src/components/new-recipe-form')
const React = require('react')
const RecipeList = require('../../src/components/recipe-list')
const RecipesApp = require('../../src/components')
const Title = require('../../src/components/title')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<RecipesApp />', () => {
  it('renders the content wrapped in a div', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={{}} />)
    assert.ok(wrapper.is('div'))
  })

  it('renders a <Title /> component as the first element', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={{}} />)
    assert.equal(wrapper.childAt(0).type(), Title)
  })

  it('renders the <Title /> component with the correct properties', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={{}} />)
    assert.equal(wrapper.childAt(0).prop('text'), 'foo')
  })

  it('renders two `fieldset` components', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={{}} />)
    assert.ok(wrapper.childAt(1).is('fieldset'))
    assert.ok(wrapper.childAt(2).is('fieldset'))
  })

  it('renders a <NewRecipeForm /> in the first fieldset', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={{}} />)
    assert.equal(wrapper.childAt(1).children().filterWhere(component => component.type() === NewRecipeForm).length, 1)
  })

  it('renders a <FavoriteFilterTagList /> in the second fieldset', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={{}} />)
    assert.equal(wrapper.childAt(2).children().filterWhere(component => component.type() === FavoriteFilterTagList).length, 1)
  })

  it('renders a <DifficultyFilterToggleList /> in the second fieldset', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={{}} />)
    assert.equal(wrapper.childAt(2).children().filterWhere(component => component.type() === DifficultyFilterToggleList).length, 1)
  })

  it('renders a <IngredientFilterInput /> in the second fieldset', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={{}} />)
    assert.equal(wrapper.childAt(2).children().filterWhere(component => component.type() === IngredientFilterInput).length, 1)
  })

  it('renders a <RecipeList /> component as the third element', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={{}} />)
    assert.equal(wrapper.childAt(3).type(), RecipeList)
  })

  it('renders the <RecipeList /> component with the correct properties', () => {
    const recipes = { items: [{ difficulty: 'bar' }] }
    const filters = { difficulty: ['foo', 'bar', 'baz', 'qux', 'quuux'], ingredients: [] }
    const wrapper = enzyme.shallow(<RecipesApp title='foo' filters={filters} recipes={recipes} />)
    assert.deepEqual(wrapper.childAt(3).prop('recipes'), recipes.items)
  })
})
