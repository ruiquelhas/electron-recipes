const React = require('react')

function FavoriteToggle ({ id, favorite, onFavoriteToggleClick }) {
  return (
    <div className='favouriteToggleContainer'>
      <input
        className='favoriteToggle'
        type='checkbox'
        defaultChecked={favorite}
        value={id}
        onClick={onFavoriteToggleClick}
      /> Favorite
    </div>
  )
}

FavoriteToggle.propTypes = {
  id: React.PropTypes.string.isRequired,
  favorite: React.PropTypes.bool
}

module.exports = FavoriteToggle
