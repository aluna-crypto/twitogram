const Twit = require('twit')

const T = new Twit({
  consumer_key        : process.env.CONSUMER_KEY,
  consumer_secret     : process.env.CONSUMER_SECRET,
  access_token        : process.env.ACCESS_TOKEN_KEY,
  access_token_secret : process.env.ACCESS_TOKEN_SECRET,
  timeout_ms          : 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL           : true,     // optional - requires SSL certificates to be valid.
});

// use http://gettwitterid.com/?user_name=MexFundingAlert&submit=GET+USER+ID
// to discover a user numeric id
const users = [
  '1159850546867687425', // @MexFundingAlert
  '1038355836416929792', // @BXRekt
  '4041496403', // @whalecalls
]

const stream = T.stream('statuses/filter', { follow : users });

module.exports = stream

