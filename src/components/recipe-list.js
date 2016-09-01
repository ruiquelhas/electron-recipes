const React = require('react')
const Recipe = require('./recipe')

function RecipeList ({ recipes = [] }) {
  const items = recipes.map(({ description, difficulty, favorite, id, ingredients, title }) => {
    return <Recipe
      description={description}
      difficulty={difficulty}
      favorite={favorite}
      id={id}
      ingredients={ingredients}
      key={id}
      title={title}
    />
  })

  return <ul className='recipeList' style={{ listStyleType: 'none' }}>{items}</ul>
}

RecipeList.propTypes = {
  recipes: React.PropTypes.array
}

module.exports = RecipeList
