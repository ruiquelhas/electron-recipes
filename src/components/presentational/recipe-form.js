const AddIngredient = require('./add-ingredient')
const DifficultySelector = require('./difficulty-selector')
const IngredientList = require('./ingredient-list')
const React = require('react')
const FormSubmitButton = require('./form-submit-button')
const FormTextArea = require('./form-text-area')
const FormTextInput = require('./form-text-input')

function RecipeForm ({ onAddIngredientClick, onDescriptionInputBlur, onDifficultyChange, onFormSubmit, onTitleInputBlur, recipe }) {
  return (
    <form id='recipeForm'>
      <FormTextInput
        id='recipeTitleInput'
        onInputBlur={onTitleInputBlur}
        placeholder='Set the recipe title'
        value={recipe.title}
      >
        Title
      </FormTextInput>
      <FormTextArea
        id='recipeDescriptionTextArea'
        onTextAreaBlur={onDescriptionInputBlur}
        placeholder='Describe the process'
        value={recipe.description}
      >
        Description
      </FormTextArea>
      <DifficultySelector
        levels={['Very Easy', 'Easy', 'Average', 'Hard', 'Very Hard']}
        onDifficultyChange={onDifficultyChange}
        value={recipe.difficulty}
      />
      <AddIngredient
        onAddClick={onAddIngredientClick}
      />
      <IngredientList
        id='newRecipe'
        ingredients={recipe.ingredients}
      />
      <FormSubmitButton
        id='saveRecipeButton'
        onClick={() => onFormSubmit(recipe)}
      >
        Add Recipe
      </FormSubmitButton>
    </form>
  )
}

module.exports = RecipeForm
