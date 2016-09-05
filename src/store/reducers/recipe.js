const { handleActions } = require('redux-actions')

module.exports = handleActions({
  ADD_INGREDIENT: (state, action) => Object.assign({}, state, {
    ingredients: [...state.ingredients, action.payload]
  }),

  CONFIRM_RECIPE_UPDATE (state, action) {
    if (state.id !== action.payload.id) {
      return state
    }

    return Object.assign({}, state, { isSaving: false })
  },

  DISPLAY_RECIPE_LEVEL: (state, action) => Object.assign({}, state, {
    level: action.payload.levels[state.difficulty - 1]
  }),

  REMOVE_INGREDIENT: (state, action) => Object.assign({}, state, {
    ingredients: [
      ...state.ingredients.slice(0, state.ingredients.indexOf(action.payload)),
      ...state.ingredients.slice(state.ingredients.indexOf(action.payload) + 1)
    ]
  }),

  TOGGLE_FAVORITE (state, action) {
    if (state.id !== action.payload.id) {
      return state
    }

    return Object.assign({}, state, { isSaving: true, favorite: !state.favorite })
  }
}, { ingredients: [] })
