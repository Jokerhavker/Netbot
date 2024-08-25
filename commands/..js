/*CMD
  command: .
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

Api.sendMessage({ 

text:

"🔰 Welcome In Our Premium Account Giveaway Bot\n------------------------------------------------\n<a href='https://t.me/+nR4C7M7sVb8wNTJl'>➡️ Channel 1</a>\n<a href='t.me/film_nest'>➡️ Channel 2 </a>\n<a href='t.me/i_primeroom_06'>➡️ Channel 3 </a>\n<a href='t.me/unreal_x_bot'>➡️ Channel 4 </a>\n-------------------------------------------------\n🛃 Before Using This Bot, After completing all tasks Click on ✅ Jᴏɪɴᴇᴅ",

parse_mode: "html",

disable_web_page_preview: true,

reply_markup: {

inline_keyboard: [[{ text: " Joined", callback_data: "/Joined" }]]

}

})
