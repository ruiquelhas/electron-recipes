/* global describe, it */

const React = require('react')
const FavoriteFilterTag = require('../../src/components/favorite-filter-tag')
const FavoriteFilterTagList = require('../../src/components/favorite-filter-tag-list')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<FavoriteFilterTagList />', () => {
  it('renders a `p` element', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTagList />)
    assert.ok(wrapper.is('p'))
  })

  it('renders an element with the proper class', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTagList />)
    assert.ok(wrapper.hasClass('favoriteFilterTagList'))
  })

  it('renders the correct number of filter components', () => {
    const wrapper = enzyme.shallow(<FavoriteFilterTagList />)
    assert.equal(wrapper.children().filterWhere(component => component.type() === FavoriteFilterTag).length, 3)
  })
})
