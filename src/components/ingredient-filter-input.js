const React = require('react')
const { filters } = require('../store/actions')
const store = require('../store')

function IngredientFilterInput () {
  return (
    <p>Show:
      {' '}
      <input
        id='ingredientFilterInput'
        type='text'
        placeholder='Type ingredients (example: rice, water, ...)'
        style={{ width: '80%', height: '2em' }}
        onInput={event => store.dispatch(filters.setIngredientFilter(event.target.value))}
      />
    </p>
  )
}

module.exports = IngredientFilterInput
