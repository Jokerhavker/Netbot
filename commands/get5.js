/*CMD
  command: get5
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var balance = Libs.ResourcesLib.userRes("balance")

try{
var a = Bot.getProperty("cf") == undefined ? 0:Bot.getProperty("cf")
    var b = a + 1
    var CU = "Acc1" + b
var C = Bot.getProperty(CU) 
Bot.sendMessage("*🛒 Order Successfully Completed..\n📧 Account Details:-\n📧 Email :- *`"+C.Email+"`*\n🔐 Password :- *`"+ C.Pass+ " `*\n🎊Thanks For Using Our Bot🎊\n~Send Screenshot To @MuskFlixxBot:\n* ")
balance.add(-2)
Bot.setProperty("cf", b, "integer")
}catch(err){
Bot.sendMessage(
    "*🛒Sorry , This Product is out of stock .*\n_🪄 We will Inform You when it cames back._")
}

