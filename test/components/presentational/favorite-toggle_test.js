/* global afterEach, before, describe, it */

const FavoriteToggle = require('src/components/presentational/favorite-toggle')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<FavoriteToggle />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a `p` element', () => {
    const wrapper = enzyme.shallow(<FavoriteToggle />)
    assert.ok(wrapper.is('p'))
  })

  it('renders a `input` checkbox element', () => {
    const wrapper = enzyme.shallow(<FavoriteToggle id='foo' />)
    assert.ok(wrapper.childAt(0).is('input[type="checkbox"]'))
  })

  it('invokes the provided callback when the `input` element value changes', () => {
    const callback = sandbox.spy()
    const wrapper = enzyme.shallow(<FavoriteToggle onChange={callback} />)
    wrapper.childAt(0).simulate('change')
    assert.equal(callback.callCount, 1)
  })
})
