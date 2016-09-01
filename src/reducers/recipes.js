const { REQUEST_RECIPES, RECEIVE_RECIPE, RECEIVE_RECIPES, RECEIVE_ERROR } = require('../actions/recipes')

module.exports = function (state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case REQUEST_RECIPES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_RECIPE:
      return Object.assign({}, state, {
        isFetching: true,
        items: state.items.concat(action.recipe),
        lastUpdated: action.receivedAt
      })
    case RECEIVE_RECIPES:
      return Object.assign({}, state, {
        isFetching: false
      })
    case RECEIVE_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}
