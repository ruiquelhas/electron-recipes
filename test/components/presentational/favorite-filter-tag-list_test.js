/* global describe, it */

const FavoriteFilterTag = require('src/components/presentational/favorite-filter-tag')
const FavoriteFilterTagList = require('src/components/presentational/favorite-filter-tag-list')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<FavoriteFilterTagList />', () => {
  it('renders a `p` element', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTagList />)
    assert.ok(wrapper.is('p'))
  })

  it('renders the correct number of filter components', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTagList filters={['foo', 'bar']} />)
    assert.equal(wrapper.children().filterWhere(component => component.type() === FavoriteFilterTag).length, 2)
  })

  it('renders the filter components with the proper React key', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTagList filters={['foo']} />)
    assert.equal(wrapper.children().filterWhere(component => component.type() === FavoriteFilterTag).at(0).key(), 'favoriteFilterTag_SHOW_FOO')
  })

  it('renders the filter components with the proper content', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTagList filters={['foo']} />)
    assert.equal(wrapper.children().filterWhere(component => component.type() === FavoriteFilterTag).at(0).childAt(0).text(), 'foo')
  })
})
