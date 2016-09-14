/* global afterEach, before, describe, it */

const AddIngredient = require('src/components/presentational/add-ingredient')
const DifficultySelector = require('src/components/presentational/difficulty-selector')
const FormSubmitButton = require('src/components/presentational/form-submit-button')
const FormTextArea = require('src/components/presentational/form-text-area')
const FormTextInput = require('src/components/presentational/form-text-input')
const IngredientList = require('src/components/presentational/ingredient-list')
const React = require('react')
const RecipeForm = require('src/components/presentational/recipe-form')
const assert = require('assert')
const enzyme = require('enzyme')
const sinon = require('sinon')

describe('<RecipeForm />', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('renders a `form` container', () => {
    const wrapper = enzyme.shallow(<RecipeForm recipe={{}} />)
    assert.ok(wrapper.is('form'))
  })

  it('renders a nested <FormTextInput /> component', () => {
    const wrapper = enzyme.shallow(<RecipeForm recipe={{}} />)
    assert.equal(wrapper.childAt(0).type(), FormTextInput)
  })

  it('renders a nested <FormTextArea /> component', () => {
    const wrapper = enzyme.shallow(<RecipeForm recipe={{}} />)
    assert.equal(wrapper.childAt(1).type(), FormTextArea)
  })

  it('renders a nested <DifficultySelector /> component', () => {
    const wrapper = enzyme.shallow(<RecipeForm recipe={{}} />)
    assert.equal(wrapper.childAt(2).type(), DifficultySelector)
  })

  it('renders a nested <AddIngredient /> component', () => {
    const wrapper = enzyme.shallow(<RecipeForm recipe={{}} />)
    assert.equal(wrapper.childAt(3).type(), AddIngredient)
  })

  it('renders a nested <IngredientList /> component', () => {
    const wrapper = enzyme.shallow(<RecipeForm recipe={{}} />)
    assert.equal(wrapper.childAt(4).type(), IngredientList)
  })

  it('renders a nested <FormSubmitButton /> component', () => {
    const wrapper = enzyme.shallow(<RecipeForm recipe={{}} />)
    assert.equal(wrapper.childAt(5).type(), FormSubmitButton)
  })
})
