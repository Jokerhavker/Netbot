/*CMD
  command: /refer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👫referral
  group: 
CMD*/

let reflink = Libs.ReferralLib.getLink();
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var key = Bot.getProperty("admin_chat")
function getRefCount(userId) {
  if (!userId) {
    userId = user.id
  }
  var refsCount = User.getProperty({
    name: "REFLIB_" + "refsCount",
    user_id: userId
  })

  if (!refsCount) {
    refsCount = 0
  }
  return refsCount
}

Bot.sendMessage(
  "*💰 Invite Users And Earn 1 POINT\n\n💹 Your Link : " +reflink+"\n\n🎯 You Invited : "+getRefCount()+" Users*"
)

