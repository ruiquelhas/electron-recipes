const levelup = require('levelup')
const leveldown = require('leveldown')
const path = require('path')

// Database.
const name = process.env.NODE_ENV || 'default'
const location = path.join(__dirname, '..', 'db', name)

let database

function destroy () {
  return new Promise((resolve, reject) => {
    leveldown.destroy(location, (error) => {
      if (error) {
        return reject(error)
      }

      return resolve()
    })
  })
}

function connect () {
  return new Promise((resolve, reject) => {
    if (database && database.isOpen()) {
      return resolve()
    }

    levelup(location, { db: leveldown, valueEncoding: 'json' }, (error, db) => {
      if (error) {
        return reject(error)
      }

      database = db

      return resolve()
    })
  })
}

function disconnect () {
  return new Promise((resolve, reject) => {
    if (!database || typeof database.close !== 'function') {
      return reject(new Error('connection not available'))
    }

    database.close((error) => {
      if (error) {
        return reject(error)
      }

      return resolve()
    })
  })
}

function get (key) {
  return new Promise((resolve, reject) => {
    if (!database || typeof database.createValueStream !== 'function') {
      return reject(new Error('connection not available'))
    }

    database.get(key, (error, value) => {
      if (error) {
        return reject(error)
      }

      return resolve(value)
    })
  })
}

function hook (callback) {
  return new Promise((resolve, reject) => {
    if (!database || typeof database.createValueStream !== 'function') {
      return reject(new Error('connection not available'))
    }

    database.createValueStream()
      .on('data', (value) => {
        return callback(value)
      })
      .on('error', (error) => {
        return reject(error)
      })
      .on('end', () => {
        return resolve()
      })
  })
}

function put (key, data) {
  return new Promise((resolve, reject) => {
    if (!database || typeof database.put !== 'function') {
      return reject(new Error('connection not available'))
    }

    database.put(key, data, (error) => {
      if (error) {
        return reject(error)
      }

      return resolve()
    })
  })
}

module.exports = {
  destroy,
  connect,
  disconnect,
  get,
  hook,
  put
}
