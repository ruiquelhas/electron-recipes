const FavoriteFilterTag = require('./favorite-filter-tag')
const React = require('react')

function FavoriteFilterTagList () {
  return (
    <p className='favoriteFilterTagList'>Show:
      {' '}
      <FavoriteFilterTag filter='SHOW_ALL'> All</FavoriteFilterTag>
      {' | '}
      <FavoriteFilterTag filter='SHOW_FAVORITES'> Favorites</FavoriteFilterTag>
      {' | '}
      <FavoriteFilterTag filter='SHOW_REGULARS'> Regulars</FavoriteFilterTag>
    </p>
  )
}

module.exports = FavoriteFilterTagList
