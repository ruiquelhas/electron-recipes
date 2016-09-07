const { createAction } = require('redux-actions')

const setFavoriteFilter = createAction('SET_FAVORITE_FILTER')

const toggleDifficultyFilter = createAction('TOGGLE_DIFFICULTY_FILTER')

const updateIngredientFilter = createAction('UPDATE_INGREDIENT_FILTER', (pattern) => ({
  filter: pattern.split(', ')
}))

module.exports = {
  setFavoriteFilter,
  toggleDifficultyFilter,
  updateIngredientFilter
}
