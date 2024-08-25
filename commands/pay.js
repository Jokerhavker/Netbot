/*CMD
  command: pay
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /pay
  group: 
CMD*/

if (user.telegramid == 1844080002){
Bot.runCommand("/id");
}else{
Bot.sendMessage("*You're not the admin*")
}
