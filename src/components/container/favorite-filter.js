const FavoriteFilterTagList = require('../presentational/favorite-filter-tag-list')
const { connect } = require('react-redux')
const { setFavoriteFilter } = require('../../store/actions/filters')

function mapDispatchToProps (dispatch) {
  return {
    onFavoriteFilterTagClick (tag) {
      dispatch(setFavoriteFilter(tag))
    }
  }
}

function mapStateToProps (state) {
  return {
    filters: ['All', 'Regulars', 'Favorites'],
    selected: state.filters.favorite
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(FavoriteFilterTagList)
