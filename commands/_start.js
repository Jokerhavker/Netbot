/*CMD
  command: /start
  help: Start the Bot
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


var wb = User.getProperty("Wb")
if(wb == undefined){
let balance = Libs.ResourcesLib.userRes("balance");
balance.add(1)
Bot.sendMessage("*You Received 1 Point as welcome bonus.*")
User.setProperty("Wb","claimed","string")
}
var admin = Bot.getProperty("admin_chat")
let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"

Bot.runCommand("/Joined")
var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  Bot.sendMessageToChatWithId(refUser.chatId, "**")
}
function doAlreadyAttracted() {
  Bot.sendMessage("")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
/*var status = Libs.ResourcesLib.anotherChatRes("totalusers", "global")*/

var welco = User.getProperty("welo")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
  Bot.sendMessageToChatWithId(  1844080002,
    "*👨🏻‍✈️New User🆕 - " +
      status.value() +
      "*\n\n*🤴🏻User = " +
      user.first_name +
      "\n\n👮🏻‍♂Username =* " +
      user_link +
      " \n\n*💳User Id =* " +
      user.telegramid +
      ""
  )
}
User.setProperty("welo", user.telegramid, "text")

