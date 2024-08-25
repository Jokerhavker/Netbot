/*CMD
  command: check
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
  Bot.runCommand("j2")
  User.addToGroup("user")
}

if (user == "left") {
  Api.sendMessage({ 

text:

"🔰 Welcome In Our Premium Account Giveaway Bot\n------------------------------------------------\n<a href='https://t.me/muskflixx'>➡️ Main Channel </a>\n<a href='https://t.me/+nR4C7M7sVb8wNTJl'>➡️ Channel 1</a>\n<a href='t.me/i_primeroom_06'>➡️ Channel 2 </a>\n<a href='t.me/kyixo'>➡️ Channel 3 </a>\n-------------------------------------------------\n🛃 Before Using This Bot, After completing all tasks Click on ✅ Jᴏɪɴᴇᴅ",

parse_mode: "html",

disable_web_page_preview: true,

reply_markup: {

inline_keyboard: [[{ text: "✅ Jᴏɪɴᴇᴅ!", callback_data: "/start" }]]

}

})

}
