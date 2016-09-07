const React = require('react')

function IngredientFilterInput ({ onIngredientInput, value }) {
  return (
    <p>Show:
      <input
        id='ingredientFilterInput'
        defaultValue={value}
        className='filterOption'
        placeholder='Type ingredients (example: rice, water, ...)'
        onInput={event => {
          onIngredientInput(event.target.value)
        }}
        type='text'
      />
    </p>
  )
}

IngredientFilterInput.propTypes = {
  onInput: React.PropTypes.func
}

module.exports = IngredientFilterInput
