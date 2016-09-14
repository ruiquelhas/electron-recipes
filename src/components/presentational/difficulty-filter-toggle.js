const React = require('react')

function FavoriteFilterTag ({ children, id, onChange }) {
  return (
    <span className='filterOption'>
      {children}
      <input
        id={id}
        defaultChecked={() => true}
        onChange={onChange}
        type='checkbox'
      />
    </span>
  )
}

module.exports = FavoriteFilterTag
