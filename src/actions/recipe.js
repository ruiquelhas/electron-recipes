const { receiveError } = require('./errors')
const db = require('../database')

const CONFIRM_RECIPE_UPDATE = 'CONFIRM_RECIPE_UPDATE'
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

function confirmRecipeUpdate (id) {
  return {
    id,
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

    return db.get(id)
      .then((recipe) => {
        db.put(recipe.id, Object.assign({}, recipe, { favorite: flag }))
      })
      .then(() => {
        return dispatch(confirmRecipeUpdate(id))
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
