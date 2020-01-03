/**
 * This file is called when running `npm run start` by our server,
 * it expects the ENV variables to be set in your environment.
 *
 * When running `npm run develop` the variables will come from
 * the .env file in this repository.
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

  const ROOM_ID = insert_room_id_here
  const message = `${tweet.text} - (Forwarded from twitter.com/${tweet.user.screen_name}/status/${tweet.id_str})`

  if (tweet.text.includes('flipped')  && tweet.retweeted_status == undefined) {
    bot.telegram.sendMessage(ROOM_ID, message);
  }

  if (tweet.text.includes('💯💯💯💯💯') && tweet.retweeted_status == undefined) {
    bot.telegram.sendMessage(ROOM_ID, message);
  }

  if (tweet.text.includes('Okcoin') && tweet.retweeted_status == undefined) {
    const str = `${tweet.text}`
    const contracts = str.split('of');
    const size = contracts[1].split(' ');

    if (parseInt(size[1]) >= 1000) {
      bot.telegram.sendMessage(ROOM_ID, message);
    }
  }

})
