/* global afterEach, before, describe, it */

const FormSelect = require('src/components/presentational/form-select')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<FormSelect />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a `div` element', () => {
    const wrapper = enzyme.shallow(<FormSelect />)
    assert.ok(wrapper.is('div'))
  })

  it('renders a `label` element for the form field', () => {
    const wrapper = enzyme.shallow(<FormSelect />)
    assert.ok(wrapper.childAt(0).is('label'))
  })

  it('renders a `label` element with the provided children', () => {
    const wrapper = enzyme.shallow(<FormSelect>foo</FormSelect>)
    assert.equal(wrapper.childAt(0).text(), 'foo')
  })

  it('renders a `select` element', () => {
    const wrapper = enzyme.shallow(<FormSelect />)
    assert.ok(wrapper.childAt(1).is('select'))
  })

  it('renders a `label` element with the provided options', () => {
    const options = ['foo', 'bar']
    const wrapper = enzyme.shallow(<FormSelect options={options} />)
    wrapper.childAt(1).children().forEach((option, index) => {
      assert.equal(option.text(), options[index])
    })
  })

  it('invokes the provided callback with the `select` element value when it changes', () => {
    const callback = sandbox.spy()
    const wrapper = enzyme.shallow(<FormSelect onChange={callback} />)
    wrapper.childAt(1).simulate('change')
    assert.equal(callback.callCount, 1)
  })
})
