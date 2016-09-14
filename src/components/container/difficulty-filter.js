const DifficultyFilterToggleList = require('../presentational/difficulty-filter-toggle-list')
const { connect } = require('react-redux')
const { toggleDifficultyFilter } = require('../../store/actions/filters')

function mapDispatchToProps (dispatch) {
  return {
    onDifficultyFilterUpdate (difficulty) {
      dispatch(toggleDifficultyFilter(difficulty))
    }
  }
}

function mapStateToProps () {
  return {
    filters: ['Very Easy', 'Easy', 'Average', 'Hard', 'Very Hard']
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(DifficultyFilterToggleList)
