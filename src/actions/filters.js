const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

function setVisibilityFilter (scope, filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    scope,
    filter
  }
}

module.exports = {
  SET_VISIBILITY_FILTER,
  setVisibilityFilter
}
