const React = require('react')
const { recipe } = require('../store/actions')
const store = require('../store')

function FavoriteToggle ({ id, isSaving, favorite }) {
  return (
    <p className='favouriteToggleContainer'>
      <input
        data-up-to-date={!isSaving}
        className='favoriteToggle'
        type='checkbox'
        defaultChecked={favorite}
        onChange={(ev) => store.dispatch(recipe.updateFavoriteFlag(id, ev.target.checked))}
      /> Favorite
    </p>
  )
}

FavoriteToggle.propTypes = {
  id: React.PropTypes.string.isRequired,
  favorite: React.PropTypes.bool
}

module.exports = FavoriteToggle
