const React = require('react')
const Ingredient = require('./ingredient')

function RecipeList ({ parent, ingredients = [] }) {
  const items = ingredients.map((name, index) => {
    return <Ingredient key={`${parent}-${index}`} name={name} />
  })

  return (
    <div>
      <p className='listLabel'>Ingredients:</p>
      <ul className='ingredientList'>{items}</ul>
    </div>
  )
}

RecipeList.propTypes = {
  ingredients: React.PropTypes.array,
  parent: React.PropTypes.string.isRequired
}

module.exports = RecipeList
