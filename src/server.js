// ~ webserver setup
const express = require('express')
const cors = require('cors')

const server = express()

server
  .disable('x-powered-by')
  .use(cors())
  .use(express.json())

// ~ routes
require('./routes/index.js')(server)

module.exports = server
