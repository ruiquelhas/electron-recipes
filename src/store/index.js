const { createStore, applyMiddleware } = require('redux')
const createLogger = require('redux-logger')
const reducer = require('./reducers')
const thunk = require('redux-thunk').default

const logger = createLogger({
  level () {
    if (process.env.NODE_ENV === 'development') {
      return 'log'
    }

    return 'error'
  }
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

module.exports = store
