const React = require('react')
const Recipe = require('./recipe')

function RecipeList ({ isFetching, onFavoriteStatusChange, recipes = [] }) {
  const items = recipes.map(({ description, favorite, id, isUpdating, ingredients, level, title }) => {
    return <Recipe
      description={description}
      favorite={favorite}
      id={id}
      ingredients={ingredients}
      isUpdating={isUpdating}
      key={id}
      level={level}
      onChange={() => onFavoriteStatusChange(id)}
      title={title}
    />
  })

  return (
    <ul data-up-to-date={!isFetching} id='recipeList'>
      {items}
    </ul>
  )
}

RecipeList.propTypes = {
  isFetching: React.PropTypes.bool,
  recipes: React.PropTypes.array
}

module.exports = RecipeList
