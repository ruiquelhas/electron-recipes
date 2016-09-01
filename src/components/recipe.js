const FavoriteToggle = require('./favorite-toggle')
const IngredientList = require('./ingredient-list')
const React = require('react')

module.exports = function (props) {
  return (
    <li className='recipe' style={{ border: '1px solid black', margin: '1em', padding: '1em' }}>
      <div className='recipeDetails'>
        <h2 className='recipeTitle'>{props.title}</h2>
        <p className='recipeDescription'>{props.description}</p>
        <IngredientList parent={props.id} ingredients={props.ingredients} />
        <p className='recipeDifficultyContainer'>
          <span>difficulty:</span>
          <span className='recipeDifficulty'>{props.difficulty}</span>
        </p>
        <FavoriteToggle recipe={props} />
      </div>
    </li>
  )
}
