const App = require('./components/main')
const { Provider } = require('react-redux')
const React = require('react')
const ReactDOM = require('react-dom')
const pkg = require('../package.json')
const { recipes } = require('./store/actions')
const store = require('./store')

ReactDOM.render(
  <Provider store={store} >
    <App title={`${pkg.name} (v${pkg.version})`} />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(recipes.fetchRecipes())
