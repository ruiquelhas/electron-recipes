const DifficultyFilterToggleList = require('./difficulty-filter-toggle-list')
const FavoriteFilterTagList = require('./favorite-filter-tag-list')
const IngredientFilterInput = require('./ingredient-filter-input')
const React = require('react')
const RecipeList = require('./recipe-list')
const Title = require('./title')
const { filter } = require('../store/helpers')

module.exports = function ({ title, recipes, filters }) {
  return (
    <div style={{ padding: '2em' }}>
      <Title text={title} />
      <fieldset className='filters' style={{ border: '1px solid black', paddingLeft: '2em' }}>
        <legend>Filters</legend>
        <h3>Favorites</h3>
        <FavoriteFilterTagList />
        <h3>Difficulty</h3>
        <DifficultyFilterToggleList />
        <h3>Ingredients</h3>
        <IngredientFilterInput />
      </fieldset>
      <RecipeList recipes={filter(recipes.items, filters)} />
    </div>
  )
}
