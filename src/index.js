const App = require('./components')
const React = require('react')
const ReactDOM = require('react-dom')
const { recipes } = require('./actions')
const pkg = require('../package.json')
const store = require('./state')
const storage = require('./storage')

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

storage.connect()
  .then(() => {
    return store.dispatch(recipes.fetchRecipes())
  })
  .catch(error => {
    throw error
  })
