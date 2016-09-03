const React = require('react')
const { filters } = require('../store/actions')
const store = require('../store')

function FavoriteFilterTag ({ filter, children }) {
  return (
    <a href='#' onClick={event => {
      event.preventDefault()
      store.dispatch(filters.setVisibilityFilter('favorite', filter))
    }}>
      {children}
    </a>
  )
}

module.exports = FavoriteFilterTag
