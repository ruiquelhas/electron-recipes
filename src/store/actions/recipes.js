const { createAction } = require('redux-actions')
const db = require('../../database')

const displayRecipeLevel = createAction('DISPLAY_RECIPE_LEVEL', () => ({
  levels: ['Very Easy', 'Easy', 'Average', 'Hard', 'Very Hard']
}))

function fetchRecipes () {
  return function (dispatch) {
    dispatch(requestRecipes())

    return db.hook(dispatch, receiveRecipe)
      .then(() => {
        dispatch(displayRecipeLevel())
        dispatch(receiveRecipes())
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

module.exports = {
  displayRecipeLevel,
  fetchRecipes,
  receiveRecipe,
  receiveRecipes,
  requestRecipes
}
