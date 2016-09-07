const { handleActions } = require('redux-actions')

module.exports = handleActions({
  ADD_INGREDIENT: (state, action) => Object.assign({}, state, {
    ingredients: [...state.ingredients, action.payload]
  }),

  SET_PROPERTY: (state, action) => Object.assign({}, state, {
    [action.payload.key]: action.payload.value
  }),

  CLEAR_DATA: (state, action) => ({ difficulty: 1, ingredients: [] }),

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
}, { difficulty: 1, ingredients: [] })
