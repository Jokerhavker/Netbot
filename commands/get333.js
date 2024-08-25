/*CMD
  command: get333
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
  var chat_id = request.message.chat.id




var but = [
  [
    { text: "Confirm", callback_data: "get2"},    { text: "Cancel", callback_data: "💲Withdraw" }]]


Api.editMessageText({
    message_id: message_id,
    text:
    "*🎁For Exchange Points to Account :-\n🖲Please Click on Comfirm*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard:  but

  },
  disable_web_page_preview: true
})
