const { combineReducers } = require('redux')

module.exports = combineReducers({
  filters: require('./filters'),
  recipes: require('./recipes')
})
