const { createAction } = require('redux-actions')

const setVisibilityFilter = createAction('SET_VISIBILITY_FILTER', (scope, filter) => ({
  scope,
  filter
}))

module.exports = {
  setVisibilityFilter
}
