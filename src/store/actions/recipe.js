const { createAction } = require('redux-actions')
const db = require('../../database')

const addIngredient = createAction('ADD_INGREDIENT')

const confirmRecipeUpdate = createAction('CONFIRM_RECIPE_UPDATE', (id) => ({
  id,
  isUpdating: false
}))

const clearData = createAction('CLEAR_DATA')

const setProperty = createAction('SET_PROPERTY', (key, value) => ({
  key,
  value
}))

const toggleFavorite = createAction('TOGGLE_FAVORITE', (id) => ({
  id,
  isUpdating: true
}))

function updateFavoriteFlag (id) {
  return function (dispatch) {
    // Give instant UI feedback
    dispatch(toggleFavorite(id))

    return db.get(id)
      .then((recipe) => {
        db.put(recipe.id, Object.assign({}, recipe, {
          favorite: !recipe.flag
        }))
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
  clearData,
  confirmRecipeUpdate,
  toggleFavorite,
  setProperty,
  updateFavoriteFlag
}
