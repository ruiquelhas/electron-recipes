const { receiveError } = require('./errors')
const db = require('../database')

const DISPLAY_RECIPE_LEVEL = 'DISPLAY_RECIPE_LEVEL'
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

function displayRecipeLevel () {
  return {
    type: DISPLAY_RECIPE_LEVEL
  }
}

function fetchRecipes () {
  return function (dispatch) {
    dispatch(requestRecipes())

    return db.hook(dispatch, receiveRecipe)
      .then(() => {
        dispatch(displayRecipeLevel())
        dispatch(receiveRecipes())
      })
      .catch(error => {
        dispatch(receiveError(error))
      })
  }
}

module.exports = {
  DISPLAY_RECIPE_LEVEL,
  RECEIVE_RECIPE,
  RECEIVE_RECIPES,
  REQUEST_RECIPES,
  displayRecipeLevel,
  fetchRecipes,
  receiveRecipe,
  receiveRecipes,
  requestRecipes
}
