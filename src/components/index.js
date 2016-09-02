const FavoriteFilterTagList = require('./favorite-filter-tag-list')
const React = require('react')
const RecipeList = require('./recipe-list')
const Title = require('./title')

function getVisibilityFilters (recipes, filters = { favorite: 'SHOW_ALL' }) {
  if (filters.favorite === 'SHOW_FAVORITES') {
    return recipes.filter(recipe => recipe.favorite)
  }

  if (filters.favorite === 'SHOW_REGULARS') {
    return recipes.filter(recipe => !recipe.favorite)
  }

  return recipes
}

module.exports = function ({ title, recipes, filters }) {
  const data = getVisibilityFilters(recipes.items, filters)

  return (
    <div style={{ padding: '2em' }}>
      <Title text={title} />
      <FavoriteFilterTagList />
      <RecipeList recipes={data} />
    </div>
  )
}
