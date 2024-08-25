/*CMD
  command: ch4
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

var user = options.result.status
User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("net3")
  User.addToGroup("user")
}

if (user == "left") {
  Bot.sendMessage("*Also Join @i_primeroom_06*")
  Bot.runCommand("/start")
}
