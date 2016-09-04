/* global describe, it */

const React = require('react')
const DifficultyFilterToggle = require('../../src/components/difficulty-filter-toggle')
const DifficultyFilterToggleList = require('../../src/components/difficulty-filter-toggle-list')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<DifficultyFilterToggleList />', () => {
  it('renders a `p` element', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggleList />)
    assert.ok(wrapper.is('p'))
  })

  it('renders an element with the proper class', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggleList />)
    assert.ok(wrapper.hasClass('difficultyFilterToggleList'))
  })

  it('renders the correct number of filter components', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggleList />)
    assert.equal(wrapper.children().filterWhere(component => component.type() === DifficultyFilterToggle).length, 5)
  })
})
