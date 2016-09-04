const React = require('react')
const Recipe = require('./recipe')

function RecipeList ({ isFetching, recipes = [] }) {
  const items = recipes.map(({ description, favorite, id, isSaving, ingredients, level, title }) => {
    return <Recipe
      description={description}
      favorite={favorite}
      id={id}
      isSaving={isSaving}
      ingredients={ingredients}
      key={id}
      level={level}
      title={title}
    />
  })

  return <ul data-is-fetching={isFetching} id='recipeList' className='recipeList' style={{ listStyleType: 'none', margin: 0, padding: 0 }}>{items}</ul>
}

RecipeList.propTypes = {
  recipes: React.PropTypes.array
}

module.exports = RecipeList
