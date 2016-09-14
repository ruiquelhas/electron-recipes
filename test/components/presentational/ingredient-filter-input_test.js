/* global afterEach, before, describe, it */

const IngredientFilterInput = require('src/components/presentational/ingredient-filter-input')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<IngredientFilterInput />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a `p` element', () => {
    const wrapper = enzyme.shallow(<IngredientFilterInput />)
    assert.ok(wrapper.is('p'))
  })

  it('renders a nested input[type="text"] element', () => {
    const wrapper = enzyme.shallow(<IngredientFilterInput />)
    assert.ok(wrapper.childAt(1).is('input[type="text"]'))
  })

  it('renders an input element with the proper class', () => {
    const wrapper = enzyme.shallow(<IngredientFilterInput />)
    assert.ok(wrapper.childAt(1).hasClass('filterOption'))
  })

  it('renders an input element with the proper id', () => {
    const wrapper = enzyme.shallow(<IngredientFilterInput />)
    assert.ok(wrapper.childAt(1).is('#ingredientFilterInput'))
  })

  it('invokes the provided callback when the input value changes', () => {
    const callback = sandbox.spy()
    const wrapper = enzyme.shallow(<IngredientFilterInput onIngredientInput={callback} />)
    wrapper.childAt(1).simulate('input', { target: { value: 'foo' } })
    assert.equal(callback.callCount, 1)
    assert.equal(callback.firstCall.args[0], 'foo')
  })
})
