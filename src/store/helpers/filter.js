function filter (recipes = [], filters = { favorite: 'SHOW_ALL', difficulty: [] }) {
  let result = Array.from(recipes)

  if (!filters.difficulty.length) {
    return []
  }

  if (filters.favorite === 'SHOW_FAVORITES') {
    result = result.filter(recipe => recipe.favorite)
  } else if (filters.favorite === 'SHOW_REGULARS') {
    result = result.filter(recipe => !recipe.favorite)
  }

  if (filters.difficulty.length) {
    result = result.filter(recipe => filters.difficulty.indexOf(recipe.difficulty) > -1)
  }

  return result
}

module.exports = filter
