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

function toggleFavorite (id) {
  return {
    id,
    isSaving: true,
    type: TOGGLE_FAVORITE
  }
}

function updateFavoriteFlag (id, flag) {
  return function (dispatch) {
    // Give instant UI feedback
    dispatch(toggleFavorite(id))

    return storage.get(id)
      .then((recipe) => {
        storage.put(recipe.id, Object.assign({}, recipe, { favorite: flag }))
      })
      .then(() => {
        return dispatch(confirmRecipeUpdate())
      })
      .catch(error => {
        return dispatch(receiveError(error))
      })
  }
}

module.exports = {
  CONFIRM_RECIPE_UPDATE,
  TOGGLE_FAVORITE,
  confirmRecipeUpdate,
  toggleFavorite,
  updateFavoriteFlag
}
