/* global describe, it */

const React = require('react')
const Recipe = require('components/presentational/recipe')
const RecipeList = require('components/presentational/recipe-list')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<RecipeList />', () => {
  it('renders a `ul` element', () => {
    const wrapper = enzyme.shallow(<RecipeList />)
    assert.ok(wrapper.is('ul'))
  })

  it('renders a list of elements with the proper component type', () => {
    const recipe = { description: 'bar', level: 'qux', favorite: false, id: 'foo', ingredients: [], title: 'baz' }
    const wrapper = enzyme.shallow(<RecipeList recipes={[recipe]} />)
    wrapper.children().forEach(component => assert.equal(component.type(), Recipe))
  })

  it('renders a list of components with the provided properties', () => {
    const recipe = { id: 'foo', title: 'bar' }
    const wrapper = enzyme.shallow(<RecipeList recipes={[recipe]} />)
    assert.deepEqual(wrapper.childAt(0).prop('title'), 'bar')
  })

  it('renders a list components with the proper React key', () => {
    const recipe = { description: 'bar', level: 'qux', favorite: false, id: 'foo', ingredients: [], title: 'baz' }
    const wrapper = enzyme.shallow(<RecipeList recipes={[recipe]} />)
    assert.equal(wrapper.childAt(0).key(), 'foo')
  })
})
