const { RECEIVE_ERROR } = require('../actions/errors')
const { RECEIVE_RECIPE, RECEIVE_RECIPES, REQUEST_RECIPES } = require('../actions/recipes')
const { TOGGLE_FAVORITE } = require('../actions/recipe')
const recipe = require('./recipe')

module.exports = function (state = { isFetching: false, isUpdating: false, items: [] }, action) {
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
    case TOGGLE_FAVORITE:
      return Object.assign({}, state, {
        isUpdating: true,
        items: state.items.map(r => recipe(r, action))
      })
    default:
      return state
  }
}