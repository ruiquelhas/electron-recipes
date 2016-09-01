const levelup = require('levelup')
const leveldown = require('leveldown')

const path = require('path')

function clean (name = 'default') {
  const location = path.join(__dirname, '..', 'db', name)

  return new Promise((resolve, reject) => {
    leveldown.destroy(location, (error) => {
      if (error) {
        return reject(error)
      }

      return resolve()
    })
  })
}

function connect (name = 'default') {
  const location = path.join(__dirname, '..', 'db', name)

  return new Promise((resolve, reject) => {
    levelup(location, { db: leveldown, valueEncoding: 'json' }, (err, db) => {
      if (err) {
        return reject(err)
      }

      return resolve(db)
    })
  })
}

function disconnect (db) {
  return new Promise((resolve, reject) => {
    if (!db || typeof db.close !== 'function') {
      return resolve()
    }

    db.close((error) => {
      if (error) {
        return reject(error)
      }

      return resolve()
    })
  })
}

function hook (db, dispatcher, action) {
  return new Promise((resolve, reject) => {
    if (!db || typeof db.createValueStream !== 'function') {
      return resolve()
    }

    db.createValueStream()
      .on('data', (value) => {
        return dispatcher(action(value))
      })
      .on('error', (error) => {
        return reject(error)
      })
      .on('end', () => {
        return resolve(db)
      })
  })
}

function put (db, key, data) {
  return new Promise((resolve, reject) => {
    if (!db || typeof db.put !== 'function') {
      return resolve()
    }

    db.put(key, data, (error) => {
      if (error) {
        return reject(error)
      }

      return resolve(db)
    })
  })
}

module.exports = {
  clean,
  connect,
  disconnect,
  hook,
  put
}
