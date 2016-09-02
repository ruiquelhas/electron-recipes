/* global describe, it */

const React = require('react')
const Recipe = require('../../src/components/recipe')
const RecipeList = require('../../src/components/recipe-list')
const assert = require('assert')
const enzyme = require('enzyme')
const noop = require('lodash.noop')

describe('<RecipeList />', () => {
  it('renders a `ul` element', () => {
    const wrapper = enzyme.shallow(<RecipeList recipes={[]} />)
    assert.ok(wrapper.is('ul'))
  })

  it('renders an element with the proper class', () => {
    const wrapper = enzyme.shallow(<RecipeList recipes={[]} />)
    assert.ok(wrapper.hasClass('recipeList'))
  })

  it('renders an element containing the proper component types', () => {
    const recipe = { description: 'bar', level: 'qux', favorite: false, id: 'foo', ingredients: [], title: 'baz' }
    const wrapper = enzyme.shallow(<RecipeList recipes={[recipe]} />)
    wrapper.children().forEach(component => assert.equal(component.type(), Recipe))
  })

  it('renders the list components with the correct properties', () => {
    const recipe = { description: 'bar', level: 'qux', favorite: false, id: 'foo', ingredients: [], title: 'baz' }
    const wrapper = enzyme.shallow(<RecipeList recipes={[recipe]} onFavoriteToggleClick={noop} />)
    const expectedProperties = Object.assign({}, recipe, { onFavoriteToggleClick: noop })
    assert.deepEqual(wrapper.childAt(0).props(), expectedProperties)
  })

  it('renders the list components with the correct React key', () => {
    const recipe = { description: 'bar', level: 'qux', favorite: false, id: 'foo', ingredients: [], title: 'baz' }
    const wrapper = enzyme.shallow(<RecipeList recipes={[recipe]} />)
    assert.equal(wrapper.childAt(0).key(), 'foo')
  })
})
