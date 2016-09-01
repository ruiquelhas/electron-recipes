const { receiveError } = require('./errors')
const storage = require('../storage')

const RECEIVE_RECIPE = 'RECEIVE_RECIPE'
const RECEIVE_RECIPES = 'RECEIVE_RECIPES'
const REQUEST_RECIPES = 'REQUEST_RECIPES'

function requestRecipes () {
  return {
    type: REQUEST_RECIPES
  }
}

function receiveRecipe (recipe) {
  return {
    type: RECEIVE_RECIPE,
    recipe,
    receivedAt: Date.now()
  }
}

function receiveRecipes () {
  return {
    type: RECEIVE_RECIPES,
    receivedAt: Date.now()
  }
}

function fetchRecipes () {
  return function (dispatch) {
    dispatch(requestRecipes())

    return storage.hook(dispatch, receiveRecipe)
      .then(() => {
        return dispatch(receiveRecipes())
      })
      .catch(error => {
        return dispatch(receiveError(error))
      })
  }
}

module.exports = {
  RECEIVE_RECIPE,
  RECEIVE_RECIPES,
  REQUEST_RECIPES,
  fetchRecipes,
  receiveRecipe,
  receiveRecipes,
  requestRecipes
}
