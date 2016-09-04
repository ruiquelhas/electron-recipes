/* global describe, it */

const React = require('react')
const DifficultyFilterToggle = require('../../src/components/difficulty-filter-toggle')
const assert = require('assert')
const enzyme = require('enzyme')

describe('<DifficultyFilterToggle />', () => {
  it('renders a `span` container', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle />)
    assert.ok(wrapper.is('span'))
  })

  it('renders the container with the proper class', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle />)
    assert.ok(wrapper.hasClass('difficultyFilterToggleContainer'))
  })

  it('renders the container with the proper children', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle children={['foo']} />)
    assert.equal(wrapper.text(), 'foo')
  })

  it('renders a nested `input` checkbox', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle />)
    assert.ok(wrapper.children().first().is('input[type="checkbox"]'))
  })

  it('renders the checkbox with the proper class', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle />)
    assert.ok(wrapper.children().first().hasClass('difficultyFilterToggle'))
  })

  it('renders the checkbox with the proper id', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle filter='foo' />)
    assert.ok(wrapper.children().first().is('#difficultyFilterToggle_foo'))
  })
})
