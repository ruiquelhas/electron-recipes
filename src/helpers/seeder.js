const db = require('../database')
const fixtures = require('./fixtures')

function random (count = 10) {
  const recipes = fixtures.createRecipes(count)

  return Promise.all(recipes.map(recipe => db.put(recipe.id, recipe)))
    .then(() => {
      return Promise.resolve(recipes)
    })
}

function single (options) {
  const recipe = fixtures.createRecipe(options)

  return db.put(recipe.id, recipe)
    .then(() => {
      return Promise.resolve(recipe)
    })
}

module.exports = {
  random,
  single
}
