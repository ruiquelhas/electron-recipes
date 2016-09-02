const storage = require('../storage')
const fixtures = require('./fixtures')

function run (recipes) {
  return storage.connect()
    .then(() => {
      return Promise.all(recipes.map(recipe => storage.put(recipe.id, recipe)))
    })
    .then(() => {
      return storage.disconnect()
    })
}

function random (count = 10) {
  const recipes = fixtures.createRecipes(count)

  return run(recipes)
    .then(() => {
      return Promise.resolve(recipes)
    })
}

function single (options) {
  const recipe = fixtures.createRecipe(options)

  return run([recipe])
    .then(() => {
      return Promise.resolve(recipe)
    })
}

module.exports = {
  random,
  single
}
