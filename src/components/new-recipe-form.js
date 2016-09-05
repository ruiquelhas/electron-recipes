const React = require('react')
const { recipe, recipes } = require('../store/actions')
const store = require('../store')

const NewRecipeForm = React.createClass({
  render () {
    return (
      <form id='newRecipeForm'>
        <div>
          <label htmlFor='recipeTitleInput'>Title</label>
          <p><input id='recipeTitleInput' ref={node => { this.recipeTitleInput = node }} type='text' style={{ width: '50%', height: '2em' }} placeholder='Set the recipe title' /></p>
        </div>
        <div>
          <label htmlFor='recipeDescriptionTextArea'>Description</label>
          <p>
            <textarea id='recipeDescriptionTextArea' ref={node => { this.recipeDescriptionTextArea = node }} rows='10' style={{ width: '50%' }} placeholder='Describe the whole process' />
          </p>
        </div>
        <div>
          <label htmlFor='recipeDifficulty'>Difficulty</label>
          <p>
            <select id='recipeDifficultySelect' ref={node => { this.recipeDifficultySelect = node }} defaultValue='1' style={{ width: '50%' }}>
              <option value='1'>Very Easy</option>
              <option value='2'>Easy</option>
              <option value='3'>Average</option>
              <option value='4'>Hard</option>
              <option value='5'>Very Hard</option>
            </select>
          </p>
        </div>
        <div>
          <label htmlFor='recipeIngredientInput'>Ingredients</label>
          <p>
            <input ref={node => { this.addIngredientInput = node }} id='recipeIngredientInput' type='text' style={{ width: '50%' }} placeholder='Add ingredient' />
            {' '}
            <input
              id='recipeIngredientInputAddButton'
              type='button'
              value='+'
              onClick={event => {
                event.preventDefault()
                store.dispatch(recipe.addIngredient(this.addIngredientInput.value))
              }}
            />
          </p>
        </div>
        <ul id='recipeIngredientInputList'>
          {this.props.newRecipe.ingredients.map((ingredient, index) => {
            return (
              <li key={`${ingredient}-${index}`} style={{ listStyle: 'none' }}>
                <span>{ingredient}</span>
                {' '}
                <input
                  className='recipeIngredientName'
                  type='button'
                  value='-'
                  onClick={event => {
                    event.preventDefault()
                    store.dispatch(recipe.removeIngredient(this.ingredientItems[index].textContent))
                  }}
                />
              </li>
            )
          })}
        </ul>
        <div>
          <input
            id='saveRecipeButton'
            type='submit'
            onClick={event => {
              event.preventDefault()

              const json = {
                title: this.recipeTitleInput.value,
                description: this.recipeDescriptionTextArea.value,
                ingredients: this.props.newRecipe.ingredients,
                difficulty: parseInt(this.recipeDifficultySelect.value, 10)
              }

              store.dispatch(recipes.saveRecipe(json))
            }}
          />
        </div>
      </form>
    )
  }
})

module.exports = NewRecipeForm
