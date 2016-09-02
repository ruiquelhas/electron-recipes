const { hacker, lorem, random } = require('faker')
const times = require('lodash.times')

function createRecipe (options = {}) {
  return Object.assign({}, {
    difficulty: random.number({ min: 1, max: 5 }),
    id: random.uuid(),
    ingredients: times(random.number({ min: 5, max: 10 }), () => hacker.noun()),
    title: lorem.word(),
    description: lorem.sentence(),
    favorite: random.boolean()
  }, options)
}

function createRecipes (count) {
  return times(count, () => createRecipe())
}

module.exports = {
  createRecipe,
  createRecipes
}
