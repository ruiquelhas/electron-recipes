const RECEIVE_ERROR = 'RECEIVE_ERROR'

function receiveError (error) {
  return {
    type: RECEIVE_ERROR,
    error
  }
}

module.exports = {
  RECEIVE_ERROR,
  receiveError
}
