/* global afterEach, before, describe, it */

const actions = require('src/store/actions/recipes')
const assert = require('assert')
const configureStore = require('redux-mock-store').default
const db = require('src/database')
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

  it('creates an action to request all recipes in the database', () => {
    const expectedAction = {
      type: 'REQUEST_RECIPES',
      payload: {
        isFetching: true
      }
    }

    assert.deepEqual(actions.requestRecipes(), expectedAction)
  })

  it('creates an action to signal that a recipe has been received', () => {
    const timestamp = Date.now()
    const expectedAction = {
      type: 'RECEIVE_RECIPE',
      payload: {
        recipe: {
          foo: 'bar'
        },
        receivedAt: timestamp
      }
    }

    assert.deepEqual(actions.receiveRecipe({ foo: 'bar' }, timestamp), expectedAction)
  })

  it('creates an action to signal that all recipes has been received', () => {
    const timestamp = Date.now()
    const expectedAction = {
      type: 'RECEIVE_RECIPES',
      payload: {
        isFetching: false,
        receivedAt: timestamp
      }
    }

    assert.deepEqual(actions.receiveRecipes(timestamp), expectedAction)
  })

  it('creates an action to display the level of each recipe', () => {
    const expectedAction = {
      type: 'DISPLAY_RECIPE_LEVEL',
      payload: {
        levels: ['Very Easy', 'Easy', 'Average', 'Hard', 'Very Hard']
      }
    }

    assert.deepEqual(actions.displayRecipeLevel(), expectedAction)
  })

  it('creates all relevant actions when the recipes have been fetched from the database', () => {
    const timestamp = Date.now()
    const store = mockStore({ recipes: [] })
    const expectedActions = [{
      type: 'REQUEST_RECIPES',
      payload: {
        isFetching: true
      }
    }, {
      type: 'DISPLAY_RECIPE_LEVEL',
      payload: {
        levels: ['Very Easy', 'Easy', 'Average', 'Hard', 'Very Hard']
      }
    }, {
      type: 'RECEIVE_RECIPES',
      payload: {
        isFetching: false,
        receivedAt: timestamp
      }
    }]

    sandbox.stub(db, 'hook').returns(Promise.resolve())

    return store.dispatch(actions.fetchRecipes(timestamp))
      .then(() => {
        assert.deepEqual(store.getActions(), expectedActions)
      })
  })

  it('creates an action to save a new recipe in the database', () => {
    const timestamp = Date.now()
    const store = mockStore({ recipes: [] })
    const expectedActions = [{
      type: 'CLEAR_DATA'
    }, {
      type: 'REQUEST_RECIPES',
      payload: {
        isFetching: true
      }
    }, {
      type: 'DISPLAY_RECIPE_LEVEL',
      payload: {
        levels: ['Very Easy', 'Easy', 'Average', 'Hard', 'Very Hard']
      }
    }, {
      type: 'RECEIVE_RECIPES',
      payload: {
        isFetching: false,
        receivedAt: timestamp
      }
    }]

    sandbox.stub(db, 'hook').returns(Promise.resolve())
    sandbox.stub(db, 'put').returns(Promise.resolve())

    return store.dispatch(actions.saveRecipe({ title: 'foo' }, timestamp))
      .then(() => {
        assert.deepEqual(store.getActions(), expectedActions)
      })
  })
})
