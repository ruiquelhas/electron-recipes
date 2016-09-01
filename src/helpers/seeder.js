#!/usr/bin/env node

const storage = require('../storage')
const fixtures = require('./fixtures')

const recipes = fixtures.createRecipes(10)

function save (db, recipe) {
  return storage.put(db, recipe.id, recipe)
}

storage.connect(process.env.NODE_ENV)
  .then((db) => {
    return Promise.all(recipes.map(recipe => save(db, recipe)))
  })
  .then(() => {
    console.log('Database was successfuly seeded.\n')
  })
  .catch(error => {
    throw error
  })
