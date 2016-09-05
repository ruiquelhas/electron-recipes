const { combineReducers } = require('redux')

module.exports = combineReducers({
  filters: require('./filters'),
  recipe: require('./recipe'),
  recipes: require('./recipes')
})
