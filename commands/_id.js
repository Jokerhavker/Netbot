/*CMD
  command: /id
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Buyer ID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 1844080002) {
  var msg = message
  User.setProperty("id", msg, "integer")
  Bot.runCommand("paid")
} else {
  Bot.sendMessage("*You're not the admin*")
}
