/* global afterEach, before, describe, it */

const DifficultySelector = require('components/presentational/difficulty-selector')
const FormSelect = require('components/presentational/form-select')
const React = require('react')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<DifficultySelector />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a <FormSelect /> component', () => {
    const wrapper = enzyme.shallow(<DifficultySelector />)
    assert.equal(wrapper.type(), FormSelect)
  })

  it('renders the component with the proper children', () => {
    const wrapper = enzyme.shallow(<DifficultySelector />)
    assert.equal(wrapper.childAt(0).text(), 'Difficulty')
  })

  it('renders the component with the proper id', () => {
    const wrapper = enzyme.shallow(<DifficultySelector />)
    assert.equal(wrapper.prop('id'), 'recipeDifficultySelect')
  })

  it('renders the correct number of select options', () => {
    const wrapper = enzyme.shallow(<DifficultySelector levels={['foo', 'bar']} />)
    assert.equal(wrapper.prop('options').length, 2)
  })

  it('renders each option with the proper React key', () => {
    const wrapper = enzyme.shallow(<DifficultySelector levels={['foo']} />)
    assert.equal(wrapper.prop('options')[0].key, 'FOO_option')
  })

  it('invokes the provided callback with the number value of the underlying element when it is changed', () => {
    const callback = sandbox.spy()
    const wrapper = enzyme.shallow(<DifficultySelector onDifficultyChange={callback} />)
    wrapper.simulate('change', { target: { value: '1' } })
    assert.equal(callback.callCount, 1)
    assert.equal(callback.firstCall.args[0], 1)
  })
})
