/*CMD
  command: paid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: account 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 1844080002){
let amount = message
let tgid = User.getProperty("id")
Bot.sendMessage("" +amount+ " Sended to "   +tgid+ "");
Bot.sendMessageToChatWithId(tgid,"" + amount + "\n *~ Admin*");
}else{
Bot.sendMessage("*You're not the admin*")
}
