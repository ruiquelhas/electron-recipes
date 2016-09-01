const FavoriteToggle = require('./favorite-toggle')
const IngredientList = require('./ingredient-list')
const React = require('react')

module.exports = function ({ description, difficulty, favorite, id, ingredients, title }) {
  return (
    <li className='recipe' style={{ border: '1px solid black', margin: '1em', padding: '1em' }}>
      <div className='recipeDetails'>
        <h2 className='recipeTitle'>{title}</h2>
        <p className='recipeDescription'>{description}</p>
        <IngredientList parent={id} ingredients={ingredients} />
        <p className='recipeDifficultyContainer'>
          <span>difficulty:</span>
          <span className='recipeDifficulty'>{difficulty}</span>
        </p>
        <FavoriteToggle value={favorite} />
      </div>
    </li>
  )
}
