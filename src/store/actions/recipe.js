const { createAction } = require('redux-actions')
const db = require('../../database')

const addIngredient = createAction('ADD_INGREDIENT')

const confirmRecipeUpdate = createAction('CONFIRM_RECIPE_UPDATE', (id) => ({
  id,
  isSaving: false
}))

const toggleFavorite = createAction('TOGGLE_FAVORITE', (id) => ({
  id,
  isSaving: true
}))

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
        return dispatch(confirmRecipeUpdate(error))
      })
  }
}

module.exports = {
  addIngredient,
  confirmRecipeUpdate,
  toggleFavorite,
  updateFavoriteFlag
}
