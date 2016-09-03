const { handleActions } = require('redux-actions')

module.exports = handleActions({
  SET_VISIBILITY_FILTER: (state, action) => Object.assign({}, state, {
    [action.payload.scope]: action.payload.filter
  })
}, { favorite: 'SHOW_ALL' })
