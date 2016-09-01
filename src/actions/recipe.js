const { receiveError } = require('./errors')
const storage = require('../storage')

const CONFIRM_RECIPE_UPDATE = 'CONFIRM_RECIPE_UPDATE'
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

function confirmRecipeUpdate () {
  return {
    isSaving: false,
    type: CONFIRM_RECIPE_UPDATE
  }
}

function saveRecipe (recipe) {
  return function (dispatch) {
    // Give instant UI feedback
    dispatch(toggleFavorite())

    return storage.put(recipe.id, recipe)
      .then(() => {
        return dispatch(confirmRecipeUpdate())
      })
      .catch(error => {
        return dispatch(receiveError(error))
      })
  }
}

function toggleFavorite () {
  return {
    isSaving: true,
    type: TOGGLE_FAVORITE
  }
}

module.exports = {
  CONFIRM_RECIPE_UPDATE,
  TOGGLE_FAVORITE,
  confirmRecipeUpdate,
  saveRecipe,
  toggleFavorite
}
