/* global describe, it */

const React = require('react')
const RecipeList = require('../../src/components/recipe-list')
const RecipesApp = require('../../src/components')
const Title = require('../../src/components/title')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<RecipesApp />', () => {
  it('renders the content wrapped in a div', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={[]} />)
    assert.ok(wrapper.is('div'))
  })

  it('renders a <Title /> component as the first element', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={[]} />)
    assert.equal(wrapper.childAt(0).type(), Title)
  })

  it('renders the <Title /> component with the correct properties', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={[]} />)
    assert.equal(wrapper.childAt(0).prop('text'), 'foo')
  })

  it('renders a <RecipeList /> component as the second element', () => {
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={[]} />)
    assert.equal(wrapper.childAt(1).type(), RecipeList)
  })

  it('renders the <RecipeList /> component with the correct properties', () => {
    const recipes = [{ foo: 'bar' }]
    const wrapper = enzyme.shallow(<RecipesApp title='foo' recipes={recipes} />)
    assert.equal(wrapper.childAt(1).prop('recipes'), recipes)
  })
})
