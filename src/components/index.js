const React = require('react')
const RecipeList = require('./recipe-list')
const Title = require('./title')

module.exports = function ({ title, recipes, onFavoriteToggleClick }) {
  return (
    <div>
      <Title text={title} />
      <RecipeList onFavoriteToggleClick={onFavoriteToggleClick} recipes={recipes.items} />
    </div>
  )
}
