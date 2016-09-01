/* global describe, it */

const FavoriteToggle = require('../../src/components/favorite-toggle')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<FavoriteToggle />', () => {
  it('renders a `input` checkbox element', () => {
    const wrapper = enzyme.shallow(<FavoriteToggle id='foo' />)
    assert.ok(wrapper.find('.favoriteToggle').is('input[type="checkbox"]'))
  })
})
