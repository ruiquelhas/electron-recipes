const { handleActions } = require('redux-actions')

module.exports = handleActions({
  SET_FAVORITE_FILTER: (state, action) => Object.assign({}, state, {
    favorite: action.payload
  }),

  SET_DIFFULTY_FILTER: (state, action) => Object.assign({}, state, {
    difficulty: action.payload.status
      ? [...state.difficulty, action.payload.filter]
      : [
        ...state.difficulty.slice(0, state.difficulty.indexOf(action.payload.filter)),
        ...state.difficulty.slice(state.difficulty.indexOf(action.payload.filter) + 1)
      ]
  })
}, { favorite: 'SHOW_ALL', difficulty: [1, 2, 3, 4, 5] })
