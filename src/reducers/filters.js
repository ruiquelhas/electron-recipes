const { SET_VISIBILITY_FILTER } = require('../actions/filters')

module.exports = function (state = { favorite: 'SHOW_ALL' }, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        [action.scope]: action.filter
      })
    default:
      return state
  }
}
