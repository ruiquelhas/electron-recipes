const React = require('react')

function AddIngredient ({ onAddClick }) {
  let input

  return (
    <div>
      <label htmlFor='recipeIngredientInput'>Add Ingredient</label>
      <input
        id='recipeIngredientInput'
        ref={node => {
          input = node
        }}
        placeholder='Type ingredient name'
        type='text'
      />
      <input
        className='inputAuxButton'
        id='recipeIngredientInputAddButton'
        onClick={event => {
          onAddClick(input.value)
          input.value = ''
        }}
        type='button'
        value='+'
      />
    </div>
  )
}

module.exports = AddIngredient
