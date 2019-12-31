const wrapAsync = require('../lib/express/wrapAsync')

module.exports = (server) => {
  server.all('/', [
  ], wrapAsync( async (req, res) => {
    return {hello: 'world'}
  }))
}
