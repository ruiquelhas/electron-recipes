const level = require('level-party')

function leveldb (location) {
  let db

  return {
    connect () {
      db = level(location, { valueEncoding: 'json' })
    },

    flush () {
      return new Promise((resolve, reject) => {
        if (!db || !db.isOpen()) {
          this.connect()
        }

        let keys = []

        db.createKeyStream()
          .on('data', (key) => {
            keys.push(key)
          })
          .on('error', (error) => {
            return reject(error)
          })
          .on('end', () => {
            const operations = keys.map(key => ({ type: 'del', key }))

            db.batch(operations, (error) => {
              if (error) {
                return reject(error)
              }

              return resolve()
            })
          })
      })
    },

    get (key) {
      return new Promise((resolve, reject) => {
        if (!db || !db.isOpen()) {
          this.connect()
        }

        db.get(key, (error, value) => {
          if (error) {
            return reject(error)
          }

          return resolve(value)
        })
      })
    },

    hook (callback) {
      return new Promise((resolve, reject) => {
        if (!db || !db.isOpen()) {
          this.connect()
        }

        db.createValueStream()
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
    },

    put (key, data) {
      return new Promise((resolve, reject) => {
        if (!db || !db.isOpen()) {
          this.connect()
        }

        db.put(key, data, (error) => {
          if (error) {
            return reject(error)
          }

          return resolve()
        })
      })
    }
  }
}

module.exports = leveldb
