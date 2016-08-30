const { combineReducers } = require('redux')

module.exports = combineReducers({
  recipes: require('./recipes')
})
