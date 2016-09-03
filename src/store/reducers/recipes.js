const { handleActions } = require('redux-actions')
const recipe = require('./recipe')

const map = (state, action) => ({
  items: state.items.map(r => {
    return recipe(r, action)
  })
})

module.exports = handleActions({
  CONFIRM_RECIPE_UPDATE: map,

  DISPLAY_RECIPE_LEVEL: map,

  RECEIVE_RECIPE: (state, action) => Object.assign({}, state, {
    isFetching: true,
    items: [...state.items, action.payload.recipe],
    lastUpdated: action.payload.receivedAt
  }),

  RECEIVE_RECIPES: (state, action) => Object.assign({}, state, {
    isFetching: false
  }),

  REQUEST_RECIPES: (state, action) => Object.assign({}, state, {
    isFetching: true
  }),

  TOGGLE_FAVORITE: map
}, { items: [] })
