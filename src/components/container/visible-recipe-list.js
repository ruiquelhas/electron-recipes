const RecipeList = require('../presentational/recipe-list')
const { connect } = require('react-redux')
const { contain } = require('hoek')
const { updateFavoriteFlag } = require('../../store/actions/recipe')

function getVisibleRecipes (recipes, filters) {
  let result = Array.from(recipes)

  if (filters.favorite === 'SHOW_FAVORITES') {
    result = result.filter(recipe => recipe.favorite)
  } else if (filters.favorite === 'SHOW_REGULARS') {
    result = result.filter(recipe => !recipe.favorite)
  }

  result = result.filter(recipe => !!filters.difficulty[recipe.difficulty])

  if (filters.ingredients.length) {
    result = result.filter(recipe => contain(recipe.ingredients, filters.ingredients))
  }

  return result
}

function mapDispatchToProps (dispatch) {
  return {
    onFavoriteStatusChange (id) {
      dispatch(updateFavoriteFlag(id))
    }
  }
}

function mapStateToProps (state) {
  return {
    isFetching: state.isFetching,
    recipes: getVisibleRecipes(state.recipes.items, state.filters)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(RecipeList)
