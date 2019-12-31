/**
 * This file is called when running `npm start`
 * in this case it's expected ENV variables to be loaded
 * either on the environment or using `env-cmd` together
 * with a file on ./env
 **/
const stream = require('./tweet_watch')
const bot = require('./telegraf')

// http server to show information on the browser
const server = require('./server')

const PORT = process.env.PORT || 80

server.listen(PORT, () => {
  console.log(` - HTTP API online, PORT: ${PORT}`)
})

// listen to tweets
stream.on('tweet', function (tweet, err) {

  console.log("")
  console.log(`- @${tweet.user.screen_name}`)
  console.log(tweet.text)
  console.log(tweet.id_str)
  console.log("check conditions: ")

  const ROOM_ID = insert_room_id_here
  const message = `${tweet.text} - (Forwarded from twitter.com/${tweet.user.screen_name}/status/${tweet.id_str})`
  
  if (tweet.text.includes('flipped')) {
    bot.telegram.sendMessage(ROOM_ID, message);
    console.log("condition 'flipped' met, tweet forwarded");
  }
    else if (tweet.text.includes('💯💯💯💯💯')) {
      bot.telegram.sendMessage(ROOM_ID, message);
      console.log("condition mex liquidation >500k met, tweet forwarded");
    }
    else if (tweet.text.includes('Okcoin')) {
      var str = `${tweet.text}`
      var contracts = str.split('of');
      var size = contracts[1].split(' ');
        if (parseInt(size[1]) >= 1000) {
          bot.telegram.sendMessage(ROOM_ID, message);
          console.log("condition okcoin liquidation >1000 contracts met, tweet forwarded");   
        } 
    }
    else {
      console.log("conditions not met, tweet not forwarded");
    } 
    
  console.log("")

})