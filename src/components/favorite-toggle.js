const React = require('react')

module.exports = function ({ value }) {
  // TODO: readOnly should be replaced by an onChange handler
  return (
    <div className='favouriteToggleContainer'>
      <input className='favoriteToggle' type='checkbox' checked={value} readOnly='true' /> Favorite
    </div>
  )
}
