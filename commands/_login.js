/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input password. Password is

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

msg = "Access denied. Password is: `BharatPal` /login"

if(message=="999"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "You admin now. Please wait messages from users";
}

Bot.sendMessage(msg);
