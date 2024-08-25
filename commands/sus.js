/*CMD
  command: sus
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

if (user.telegramid == 1844080002){
Bot.runCommand("sus1");
}else{
Bot.sendMessage("*You're not the admin*")
}
