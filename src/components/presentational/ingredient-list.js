const React = require('react')
const Ingredient = require('./ingredient')

function IngredientList ({ id, ingredients = [] }) {
  const items = ingredients.map((name, index) => {
    return <Ingredient key={`${id}-${index}`}>{name}</Ingredient>
  })

  return (
    <div>
      <p className='listLabel'>Ingredients:</p>
      <ul className='ingredientList'>{items}</ul>
    </div>
  )
}

IngredientList.propTypes = {
  ingredients: React.PropTypes.array
}

module.exports = IngredientList
