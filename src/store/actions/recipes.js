const { createAction } = require('redux-actions')
const db = require('../../database')
const recipe = require('./recipe')
const uuid = require('uuid')

const displayRecipeLevel = createAction('DISPLAY_RECIPE_LEVEL', () => ({
  levels: ['Very Easy', 'Easy', 'Average', 'Hard', 'Very Hard']
}))

function fetchRecipes (timestamp) {
  return function (dispatch) {
    dispatch(requestRecipes())

    return db.hook(dispatch, receiveRecipe)
      .then(() => {
        dispatch(displayRecipeLevel())
        dispatch(receiveRecipes(timestamp))
      })
      .catch(error => {
        dispatch(receiveRecipes(error))
      })
  }
}

const receiveRecipe = createAction('RECEIVE_RECIPE', (recipe, receivedAt) => ({
  recipe,
  receivedAt: receivedAt || Date.now()
}))

const receiveRecipes = createAction('RECEIVE_RECIPES', (receivedAt) => ({
  isFetching: false,
  receivedAt: receivedAt || Date.now()
}))

const requestRecipes = createAction('REQUEST_RECIPES', () => ({
  isFetching: true
}))

function saveRecipe (data, timestamp) {
  const instance = Object.assign({}, data, {
    favorite: false,
    id: uuid.v4()
  })

  return function (dispatch) {
    return db.put(instance.id, instance)
      .then(() => {
        dispatch(recipe.clearData())
        dispatch(fetchRecipes(timestamp))
      })
      .catch(error => {
        dispatch(recipe.clearData(error))
      })
  }
}

module.exports = {
  displayRecipeLevel,
  fetchRecipes,
  receiveRecipe,
  receiveRecipes,
  requestRecipes,
  saveRecipe
}
