const App = require('./components')
const React = require('react')
const ReactDOM = require('react-dom')
const { recipes } = require('./actions')
const pkg = require('../package.json')
const store = require('./store')
const database = require('./database')

const render = () => {
  const state = store.getState()

  if (state.recipes && state.recipes.error) {
    return console.error(state.recipes.error.message)
  }

  ReactDOM.render(
    <App
      title={`${pkg.name} (v${pkg.version})`}
      recipes={state.recipes}
      filters={state.filters}
    />,
    document.getElementById('root')
  )
}

store.subscribe(render)

database.connect()
  .then(() => {
    return store.dispatch(recipes.fetchRecipes())
  })
  .catch(error => {
    throw error
  })
