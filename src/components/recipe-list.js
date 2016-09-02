const React = require('react')
const Recipe = require('./recipe')

function RecipeList ({ recipes = [], onFavoriteToggleClick }) {
  const items = recipes.map(({ description, favorite, id, ingredients, level, title }) => {
    return <Recipe
      description={description}
      favorite={favorite}
      id={id}
      ingredients={ingredients}
      key={id}
      level={level}
      title={title}
      onFavoriteToggleClick={onFavoriteToggleClick}
    />
  })

  return <ul className='recipeList' style={{ listStyleType: 'none' }}>{items}</ul>
}

RecipeList.propTypes = {
  recipes: React.PropTypes.array
}

module.exports = RecipeList
