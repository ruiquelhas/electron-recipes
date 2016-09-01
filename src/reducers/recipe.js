const { RECEIVE_ERROR } = require('../actions/errors')
const { CONFIRM_RECIPE_UPDATE, TOGGLE_FAVORITE } = require('../actions/recipe')

module.exports = function (state = {}, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return Object.assign({}, state, {
        isSaving: true,
        favorite: !state.favorite
      })
    case CONFIRM_RECIPE_UPDATE:
      return Object.assign({}, state, {
        isSaving: false
      })
    case RECEIVE_ERROR:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
