/*CMD
  command: pp2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


  var message_id = request.message.message_id
  var chat_id = "@MuskFlixx"
  var call = request.message.message_id
  Api.editMessageText({
    message_id: message_id,
    text:
    "*🆕 New Account Purchased*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Crunchyroll Account\n\n*💵 Amount:* 3 *Points*\n\n*🫧 Status:* Account Paid ✅\n\n~ Bought From @NFpremiumsBot",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})

