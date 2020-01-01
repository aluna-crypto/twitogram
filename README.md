# TwiToGram

Fetches Tweets from a User's Timeline and forwards it to Telegram.

In this version, we forward forward tweets from:
 - twitter.com/MexFundingAlert only for funding flips
 - twitter.com/BXRekt only for liquidations >500k contracts
 - twitter.com/whalecalls only for liquidations >1000 contracts

# Installing

Make sure you have installed:
 - Node.js, version 12 or above
 - MongoDB, and it's running before you start your application

# Developing

When developing locally we will be using the variables specified on the .env file.

Add your API credentials in ./.env:
 - Twitter: CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET
 - Telegram: TELEGRAM_TOKEN

Add ROOM_ID in ./index.js to define the chat or group numeric id to forward tweets to.

In the terminal, run:
````bash
$ npm install
$ npm run develop
````
