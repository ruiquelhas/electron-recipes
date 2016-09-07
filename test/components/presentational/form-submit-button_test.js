/* global afterEach, before, describe, it */

const FormSubmitButton = require('components/presentational/form-submit-button')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<FormSubmitButton />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a `div` container', () => {
    const wrapper = enzyme.shallow(<FormSubmitButton />)
    assert.ok(wrapper.is('div'))
  })

  it('renders a nested `input[type="button"]` element', () => {
    const wrapper = enzyme.shallow(<FormSubmitButton />)
    assert.ok(wrapper.childAt(0).is('input[type="button"]'))
  })

  it('invokes the provided callback when the button is clicked', () => {
    const callback = sinon.spy()
    const wrapper = enzyme.shallow(<FormSubmitButton onClick={callback} />)
    wrapper.childAt(0).simulate('click')
    assert.equal(callback.callCount, 1)
  })
})
