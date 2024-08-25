/*CMD
  command: less2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: amount? 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 1844080002){
let amount = parseFloat(message)
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
res.add(parseFloat(amount))
Bot.sendMessage("*The amount " +amount+ " kaat liya :  *"   +tgid+ 
  " *balance*");
Bot.sendMessageToChatWithId(tgid,"*!!!Fake Refferal Detected!!!*\n\n" + amount + " *points deducted from your account.*");
}else{
Bot.sendMessage("*You're not the admin*")
}
