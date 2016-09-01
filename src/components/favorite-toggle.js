const React = require('react')
const { recipe } = require('../actions')
const store = require('../state')

function FavoriteToggle (props) {
  return (
    <div className='favouriteToggleContainer'>
      <input
        className='favoriteToggle'
        type='checkbox'
        checked={props.recipe.favorite}
        onChange={() => store.dispatch(recipe.saveRecipe(Object.assign({}, props.recipe, { favorite: !props.recipe.favorite })))}
      /> Favorite
    </div>
  )
}

FavoriteToggle.propTypes = {
  recipe: React.PropTypes.object.isRequired
}

module.exports = FavoriteToggle
