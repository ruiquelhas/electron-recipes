const { createStore, applyMiddleware } = require('redux')
const rootReducer = require('./reducers')
const thunkMiddleware = require('redux-thunk').default

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

module.exports = store
