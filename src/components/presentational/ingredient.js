const React = require('react')

function Ingredient ({ children }) {
  return <li className='ingredient'>{children}</li>
}

module.exports = Ingredient
