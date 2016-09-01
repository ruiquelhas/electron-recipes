#!/usr/bin/env node

const storage = require('../storage')
const fixtures = require('./fixtures')

const recipes = fixtures.createRecipes(10)

function save (recipe) {
  return storage.put(recipe.id, recipe)
}

storage.connect()
  .then((db) => {
    return Promise.all(recipes.map(save))
  })
  .then(() => {
    console.log('Database was successfuly seeded.\n')
  })
  .catch(error => {
    throw error
  })
