# TwiToGram

Fetches Tweets from a User's Timeline and forwards it to Telegram.

In this version, we forward tweets from:
 - twitter.com/MexFundingAlert only for funding flips
 - twitter.com/BXRekt only for liquidations >500k contracts
 - twitter.com/whalecalls only for liquidations >1000 contracts

# Installing

Make sure you have installed:
 - Node.js, version 12 or above

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
# Next Steps

 We started developing an HTTP Service using Express and MongoDB in order to
 keep track of which rooms the bot was added and removed from.


 With MongoDB we will also be able to keep track of the tweets and be able
 to provide other information, such as:

 - When was the last flip
 - When was the last time X amount of contracts were liquidated

 We also plan to allow users to setup custom alerts and receive them based
 on their own configuation
