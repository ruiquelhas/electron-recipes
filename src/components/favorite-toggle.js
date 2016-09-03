const React = require('react')
const { recipe } = require('../actions')
const store = require('../store')

function FavoriteToggle ({ id, isSaving, favorite }) {
  return (
    <div className='favouriteToggleContainer'>
      <input
        data-up-to-date={!isSaving}
        className='favoriteToggle'
        type='checkbox'
        checked={favorite ? 'checked' : ''}
        onChange={(ev) => store.dispatch(recipe.updateFavoriteFlag(id, ev.target.checked))}
      /> Favorite
    </div>
  )
}

FavoriteToggle.propTypes = {
  id: React.PropTypes.string.isRequired,
  favorite: React.PropTypes.bool
}

module.exports = FavoriteToggle
