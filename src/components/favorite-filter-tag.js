const React = require('react')
const { filters } = require('../store/actions')
const store = require('../store')

function FavoriteFilterTag ({ filter, children }) {
  return (
    <a href='#'
      id={`favoriteFilterTag_${filter}`}
      className='favoriteFilterTag'
      onClick={event => {
        event.preventDefault()
        store.dispatch(filters.setFavoriteFilter(filter))
      }}
    >
      {children}
    </a>
  )
}

module.exports = FavoriteFilterTag
