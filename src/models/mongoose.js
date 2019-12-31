const mongoose = require('mongoose')

// see: https://mongoosejs.com/docs/deprecations.html#-findandmodify-
mongoose.set('useFindAndModify', false)

module.exports = (mongoURI) => {
  const promise = mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    // autoReconnect: true,
    // reconnectTries: 1000000,
    // reconnectInterval: 3000,
    useUnifiedTopology: true
  })

  mongoose.set('useCreateIndex', true)

  const connection = mongoose.connection

  connection.on('error', () => {
    console.error(' ! mongoose connection error')
    console.log(arguments)
  })

  connection.once('open', () => {
    if(process.env.NODE_ENV !== 'test'){
      console.log(' - mongoose connected')
    }
  })

  return promise
}
