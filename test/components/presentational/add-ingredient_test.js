/* global afterEach, before, describe, it */

const AddIngredient = require('src/components/presentational/add-ingredient')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<AddIngredient />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a `div` container', () => {
    const wrapper = enzyme.shallow(<AddIngredient />)
    assert.ok(wrapper.is('div'))
  })

  it('renders a `label` element for the form field', () => {
    const wrapper = enzyme.shallow(<AddIngredient />)
    assert.ok(wrapper.childAt(0).is('label'))
  })

  it('renders a nested `input[type="text"]` element', () => {
    const wrapper = enzyme.shallow(<AddIngredient />)
    assert.ok(wrapper.childAt(1).is('input[type="text"]'))
  })

  it('renders a nested `input[type="button"]` element', () => {
    const wrapper = enzyme.shallow(<AddIngredient />)
    assert.ok(wrapper.childAt(2).is('input[type="button"]'))
  })
})
