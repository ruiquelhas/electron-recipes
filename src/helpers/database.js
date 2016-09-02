const storage = require('../storage')

function clean () {
  return storage.destroy()
}

module.exports = {
  clean
}
