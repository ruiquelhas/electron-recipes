const React = require('react')

function FavoriteFilterTag ({ active, children, id, onClick }) {
  return (
    <a
      id={id}
      className={`filterOption ${active ? 'active' : 'inactive'}`}
      href='#'
      onClick={onClick}
    >
      {children}
    </a>
  )
}

module.exports = FavoriteFilterTag
