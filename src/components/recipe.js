const FavoriteToggle = require('./favorite-toggle')
const IngredientList = require('./ingredient-list')
const React = require('react')

function Recipe ({ description, favorite, id, isSaving, ingredients, level, title }) {
  return (
    <li className='recipe' style={{ border: '1px solid black', margin: '1em', padding: '1em' }}>
      <div className='recipeDetails'>
        <h2 className='recipeTitle'>{title}</h2>
        <p className='recipeDescription'>{description}</p>
        <IngredientList parent={id} ingredients={ingredients} />
        <p className='recipeLevelContainer'>
          <span>Level: </span>
          <span className='recipeLevel'>{level}</span>
        </p>
        <FavoriteToggle id={id} favorite={favorite} isSaving={isSaving} />
      </div>
    </li>
  )
}

Recipe.propTypes = {
  description: React.PropTypes.string,
  favorite: React.PropTypes.bool,
  id: React.PropTypes.string,
  ingredients: React.PropTypes.array,
  level: React.PropTypes.string,
  title: React.PropTypes.string
}

module.exports = Recipe
