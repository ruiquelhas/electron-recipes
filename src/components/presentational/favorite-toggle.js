const React = require('react')

function FavoriteToggle ({ favorite, isUpdating, onChange }) {
  return (
    <p className='favouriteToggleContainer'>
      <input
        data-up-to-date={!isUpdating}
        className='favoriteToggle toggle'
        type='checkbox'
        defaultChecked={favorite}
        onChange={onChange}
      /> Favorite
    </p>
  )
}

FavoriteToggle.propTypes = {
  favorite: React.PropTypes.bool,
  isSaving: React.PropTypes.bool,
  onChange: React.PropTypes.func
}

module.exports = FavoriteToggle
