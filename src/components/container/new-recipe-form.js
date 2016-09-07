const RecipeForm = require('../presentational/recipe-form')
const { connect } = require('react-redux')
const { addIngredient, setProperty } = require('../../store/actions/recipe')
const { saveRecipe } = require('../../store/actions/recipes')

function mapDispatchToProps (dispatch) {
  return {
    onAddIngredientClick (name) {
      dispatch(addIngredient(name))
    },

    onDescriptionInputBlur (description) {
      dispatch(setProperty('description', description))
    },

    onDifficultyChange (difficulty) {
      dispatch(setProperty('difficulty', difficulty))
    },

    onFormSubmit (recipe) {
      dispatch(saveRecipe(recipe))
    },

    onTitleInputBlur (title) {
      dispatch(setProperty('title', title))
    }
  }
}

function mapStateToProps (state) {
  return {
    recipe: state.recipe
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(RecipeForm)
