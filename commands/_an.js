/*CMD
  command: /an
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

if (user.telegramid == 1844080002) {
if(params){
var n = Bot.getProperty("num")
function num(){
if(n == undefined){
return 1;
}else{
return n;
}}

var spi = params.split(":")
var k1 = spi[0]
var k2 = spi[1]

  Bot.setProperty({
    name: "Acc"+num(),
    value: { Email: k1, Pass: k2 }
  })
Bot.setProperty("num",num()+1,"integer")
Bot.sendMessage(
  num()+" *Account added SUCCESSFULY ADDED✅\n\nYOUR NETFLIX ACCOUNT 👇\n\nEMAIL : " +
    k1 +
    " \nPASS : " +
    k2 +
    "\n\nDEVELOP BY - @UnknownMusk*"
)
return}
Bot.sendMessage("Run Command In Format of \n\n `/add mail:password `")
}
