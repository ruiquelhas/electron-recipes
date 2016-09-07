/* global afterEach, before, describe, it */

const actions = require('store/actions/recipe')
const assert = require('assert')
const configureStore = require('redux-mock-store').default
const db = require('database')
const thunk = require('redux-thunk').default
const sinon = require('sinon')

const mockStore = configureStore([thunk])

describe('recipes actions', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('creates an action to add an ingredient to a new recipe', () => {
    const expectedAction = {
      type: 'ADD_INGREDIENT'
    }

    assert.deepEqual(actions.addIngredient(), expectedAction)
  })

  it('creates an action to confirm the update of an existing recipe', () => {
    const expectedAction = {
      type: 'CONFIRM_RECIPE_UPDATE',
      payload: {
        id: 'foo',
        isUpdating: false
      }
    }

    assert.deepEqual(actions.confirmRecipeUpdate('foo'), expectedAction)
  })

  it('creates an action to clear the data of a new recipe', () => {
    const expectedAction = {
      type: 'CLEAR_DATA'
    }

    assert.deepEqual(actions.clearData(), expectedAction)
  })

  it('creates an action to set a given property on a new recipe', () => {
    const expectedAction = {
      type: 'SET_PROPERTY',
      payload: {
        key: 'foo',
        value: 'bar'
      }
    }

    assert.deepEqual(actions.setProperty('foo', 'bar'), expectedAction)
  })

  it('creates an action to update the favorite status of a given recipe', () => {
    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      payload: {
        id: 'foo',
        isUpdating: true
      }
    }

    assert.deepEqual(actions.toggleFavorite('foo'), expectedAction)
  })

  it('creates all relevant actions when the recipe favorite status has been updated in the database', () => {
    const store = mockStore()
    const expectedActions = [{
      type: 'TOGGLE_FAVORITE',
      payload: {
        id: 'foo',
        isUpdating: true
      }
    }, {
      type: 'CONFIRM_RECIPE_UPDATE',
      payload: {
        id: 'foo',
        isUpdating: false
      }
    }]

    sandbox.stub(db, 'connect').returns(Promise.resolve())
    sandbox.stub(db, 'get').returns(Promise.resolve({ id: 'foo' }))
    sandbox.stub(db, 'put').returns(Promise.resolve())

    return db.connect()
      .then(() => {
        return store.dispatch(actions.updateFavoriteFlag('foo'))
      })
      .then(() => {
        assert.deepEqual(store.getActions(), expectedActions)
      })
  })
})
