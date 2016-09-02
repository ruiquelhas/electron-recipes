const React = require('react')

function Title ({ text }) {
  return <h1 className='title'>{text}</h1>
}

Title.propTypes = {
  text: React.PropTypes.string
}

module.exports = Title
