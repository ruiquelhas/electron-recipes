const App = require('./components')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore, applyMiddleware } = require('redux')
const { recipes } = require('./actions')
const pkg = require('../package.json')
const rootReducer = require('./reducers')
const thunkMiddleware = require('redux-thunk').default

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const render = () => {
  const state = store.getState()

  if (state.recipes && state.recipes.error) {
    return console.error(state.recipes.error.message)
  }

  ReactDOM.render(
    <App
      title={`${pkg.name} (v${pkg.version})`}
      recipes={state.recipes.items}
    />,
    document.getElementById('root')
  )
}

store.subscribe(render)
store.dispatch(recipes.fetchRecipes())
