/*CMD
  command: ref
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

var C = "Point"
var setbo = 1
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
   return
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(+setbo)
  var refcom = Libs.ResourcesLib.anotherUserRes("n", referrer.telegramid)
  refcom.add(+setbo)
  Bot.sendMessageToChatWithId(referrer.telegramid, "*❤️ Your Referral Joined Our Channel\n➕ "+setbo+" "+C+" Added.*")
} else {
  Bot.sendMessage()
}
