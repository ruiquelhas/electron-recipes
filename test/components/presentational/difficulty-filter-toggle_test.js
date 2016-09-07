/* global afterEach, before, describe, it */

const DifficultyFilterToggle = require('components/presentational/difficulty-filter-toggle')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<DifficultyFilterToggle />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a `span` container', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle />)
    assert.ok(wrapper.is('span'))
  })

  it('renders the container with the proper class', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle />)
    assert.ok(wrapper.hasClass('filterOption'))
  })

  it('renders the container with the proper children', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle children={['foo']} />)
    assert.equal(wrapper.text(), 'foo')
  })

  it('renders a nested `input[type="checkbox"]` element', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle />)
    assert.ok(wrapper.childAt(0).is('input[type="checkbox"]'))
  })

  it('renders the input element with the proper id', () => {
    const wrapper = enzyme.shallow(<DifficultyFilterToggle id='foo' />)
    assert.ok(wrapper.childAt(0).is('#foo'))
  })

  it('invokes the provided callback when it is changes', () => {
    const callback = sinon.spy()
    const wrapper = enzyme.shallow(<DifficultyFilterToggle onChange={callback} />)
    wrapper.childAt(0).simulate('change')
    assert.equal(callback.callCount, 1)
  })
})
