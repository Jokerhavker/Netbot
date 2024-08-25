/*CMD
  command: sus1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: id

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 1844080002) {
  var msg = message
  User.setProperty("id", msg, "integer")
  Bot.runCommand("sus2")
} else {
  Bot.sendMessage("*You're not the admin*")
}
