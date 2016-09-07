const FavoriteToggle = require('./favorite-toggle')
const IngredientList = require('./ingredient-list')
const React = require('react')

function Recipe ({ description, favorite, id, ingredients, isUpdating, level, onChange, title }) {
  return (
    <li className='recipe'>
      <h2 className='recipeTitle'>{title}</h2>
      <p className='recipeDescription'>{description}</p>
      <IngredientList
        id={id}
        ingredients={ingredients}
      />
      <p className='recipeLevelContainer'>
        <span>Level: </span>
        <span className='recipeLevel'>{level}</span>
      </p>
      <FavoriteToggle
        favorite={favorite}
        id={`${id}_favoriteToggle`}
        isUpdating={isUpdating}
        onChange={onChange}
      />
    </li>
  )
}

Recipe.propTypes = {
  description: React.PropTypes.string,
  favorite: React.PropTypes.bool,
  id: React.PropTypes.string,
  ingredients: React.PropTypes.array,
  isUpdating: React.PropTypes.bool,
  level: React.PropTypes.string,
  onChange: React.PropTypes.func,
  title: React.PropTypes.string
}

module.exports = Recipe
