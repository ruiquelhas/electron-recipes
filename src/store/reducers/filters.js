const { handleActions } = require('redux-actions')

module.exports = handleActions({
  SET_FAVORITE_FILTER: (state, action) => Object.assign({}, state, {
    favorite: action.payload
  }),

  UPDATE_INGREDIENT_FILTER: (state, action) => Object.assign({}, state, {
    ingredients: !action.payload.filter[0].length
      ? []
      : action.payload.filter
  }),

  TOGGLE_DIFFICULTY_FILTER: (state, action) => Object.assign({}, state, {
    difficulty: Object.assign({}, state.difficulty, {
      [action.payload]: !state.difficulty[action.payload]
    })
  })
}, {
  difficulty: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true
  },
  favorite: 'SHOW_ALL',
  ingredients: []
})
