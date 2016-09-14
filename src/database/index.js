const leveldb = require('./leveldb')
const path = require('path')

const name = process.env.NODE_ENV || 'default'
const location = path.join(__dirname, '..', '..', 'db', name)

module.exports = leveldb(location)
