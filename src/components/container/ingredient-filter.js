const IngredientFilterInput = require('../presentational/ingredient-filter-input')
const { connect } = require('react-redux')
const { updateIngredientFilter } = require('../../store/actions/filters')

function mapDispatchToProps (dispatch) {
  return {
    onIngredientInput (name) {
      dispatch(updateIngredientFilter(name))
    }
  }
}

function mapStateToProps (state) {
  return {
    value: ''
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(IngredientFilterInput)
