/* global describe, it */

const DifficultyFilterToggle = require('components/presentational/difficulty-filter-toggle')
const DifficultyFilterToggleList = require('components/presentational/difficulty-filter-toggle-list')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<DifficultyFilterToggleList />', () => {
  it('renders a `p` element', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggleList />)
    assert.ok(wrapper.is('p'))
  })

  it('renders the correct number of filter components', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggleList filters={['foo', 'bar']} />)
    assert.equal(wrapper.children().filterWhere(component => component.type() === DifficultyFilterToggle).length, 2)
  })

  it('renders the filter components with the proper React key', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggleList filters={['foo bar']} />)
    assert.equal(wrapper.children().filterWhere(component => component.type() === DifficultyFilterToggle).at(0).key(), 'difficultyFilterToggle_FOO_BAR')
  })

  it('renders the filter components with the proper id', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggleList filters={['foo bar']} />)
    assert.equal(wrapper.children().filterWhere(component => component.type() === DifficultyFilterToggle).at(0).prop('id'), 'difficultyFilterToggle_FOO_BAR')
  })

  it('renders the filter components with the proper content', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggleList filters={['foo']} />)
    assert.equal(wrapper.children().filterWhere(component => component.type() === DifficultyFilterToggle).at(0).childAt(0).text(), 'foo')
  })
})
