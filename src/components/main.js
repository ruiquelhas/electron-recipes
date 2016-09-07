const DifficultyFilter = require('./container/difficulty-filter')
const FavoriteFilter = require('./container/favorite-filter')
const IngredientFilter = require('./container/ingredient-filter')
const NewRecipeForm = require('./container/new-recipe-form')
const React = require('react')
const Title = require('./presentational/title')
const VisibleRecipeList = require('./container/visible-recipe-list')

function RecipeApp ({ title }) {
  return (
    <div id='main'>
      <Title>{title}</Title>
      <NewRecipeForm />
      <FavoriteFilter />
      <DifficultyFilter />
      <IngredientFilter />
      <VisibleRecipeList />
    </div>
  )
}

module.exports = RecipeApp
