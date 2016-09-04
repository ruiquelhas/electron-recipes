const { handleActions } = require('redux-actions')

module.exports = handleActions({
  CONFIRM_RECIPE_UPDATE (state, action) {
    if (state.id !== action.payload.id) {
      return state
    }

    return Object.assign({}, state, { isSaving: false })
  },

  DISPLAY_RECIPE_LEVEL: (state, action) => Object.assign({}, state, {
    level: action.payload.levels[state.difficulty - 1]
  }),

  TOGGLE_FAVORITE (state, action) {
    if (state.id !== action.payload.id) {
      return state
    }

    return Object.assign({}, state, { isSaving: true, favorite: !state.favorite })
  }
})
