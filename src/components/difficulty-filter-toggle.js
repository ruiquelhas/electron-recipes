const React = require('react')
const { filters } = require('../store/actions')
const store = require('../store')

function FavoriteFilterTag ({ filter, children }) {
  return (
    <span className='difficultyFilterToggleContainer'>
      {children}
      <input
        id={`difficultyFilterToggle_${filter}`}
        className='difficultyFilterToggle'
        type='checkbox'
        defaultChecked={() => true}
        onChange={(ev) => store.dispatch(filters.setDifficultyFilter(filter, ev.target.checked))}
      />
    </span>
  )
}

module.exports = FavoriteFilterTag
