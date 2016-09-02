const React = require('react')

function Ingredient ({ name }) {
  return <li className='ingredient'>{name}</li>
}

Ingredient.propTypes = {
  name: React.PropTypes.string.isRequired
}

module.exports = Ingredient
