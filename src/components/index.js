const React = require('react')
const RecipeList = require('./recipe-list')
const Title = require('./title')

module.exports = function ({ title, recipes }) {
  return (
    <div>
      <Title text={title} />
      <RecipeList recipes={recipes} />
    </div>
  )
}
