/* global afterEach, before, describe, it */

const FormTextArea = require('components/presentational/form-text-area')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<FormTextArea />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a `div` element', () => {
    const wrapper = enzyme.shallow(<FormTextArea />)
    assert.ok(wrapper.is('div'))
  })

  it('renders a `label` element for the form field', () => {
    const wrapper = enzyme.shallow(<FormTextArea />)
    assert.ok(wrapper.childAt(0).is('label'))
  })

  it('renders a `label` element with the provided children', () => {
    const wrapper = enzyme.shallow(<FormTextArea>foo</FormTextArea>)
    assert.equal(wrapper.childAt(0).text(), 'foo')
  })

  it('renders a `textarea` element', () => {
    const wrapper = enzyme.shallow(<FormTextArea />)
    assert.ok(wrapper.childAt(1).is('textarea'))
  })

  it('invokes the provided callback with the `textarea` element value when it blurs', () => {
    const callback = sandbox.spy()
    const wrapper = enzyme.shallow(<FormTextArea onTextAreaBlur={callback} />)
    wrapper.childAt(1).simulate('blur', { target: { value: 'foo' } })
    assert.equal(callback.callCount, 1)
    assert.equal(callback.firstCall.args[0], 'foo')
  })
})
