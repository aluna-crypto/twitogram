const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()

bot.on('new_chat_members', (context) => {

  const newMember = context.message.new_chat_participant
  const isMe = ( context.botInfo.id === newMember.id )

  console.log("")
  console.log("new chat member")
  console.log("chatId:", context.message.chat.id)
  console.log("title :", context.message.chat.title)
  console.log("new participant")
  console.log(" -   id:", newMember.id)
  console.log(" - name:", newMember.username)
  console.log(" is it me? ", isMe)

})

bot.on('left_chat_member', (context) => {

  console.log("left chat members")
  console.log("context ->", context)

})

module.exports = bot
