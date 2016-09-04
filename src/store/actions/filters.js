const { createAction } = require('redux-actions')

const setDifficultyFilter = createAction('SET_DIFFULTY_FILTER', (filter, status) => ({
  filter: ['VERY_EASY', 'EASY', 'AVERAGE', 'HARD', 'VERY_HARD'].indexOf(filter) + 1,
  status
}))

const setFavoriteFilter = createAction('SET_FAVORITE_FILTER')

const setIngredientFilter = createAction('SET_INGREDIENT_FILTER', (pattern) => ({
  filter: pattern.split(', ')
}))

module.exports = {
  setDifficultyFilter,
  setFavoriteFilter,
  setIngredientFilter
}
