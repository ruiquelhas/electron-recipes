const db = require('../database')
const fixtures = require('./fixtures')

function run (recipes) {
  return db.connect()
    .then(() => {
      return Promise.all(recipes.map(recipe => db.put(recipe.id, recipe)))
    })
    .then(() => {
      return db.disconnect()
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
