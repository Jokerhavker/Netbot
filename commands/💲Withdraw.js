/*CMD
  command: 💲Withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /buyaccounts
  group: 
CMD*/



//Put In /start BJ's On The Top

var buttons = [[{title:"Watch Netflix Without Login", url:"http://t.me/NFpremiumsBot/Netflix"}],[{title:"Netflix", command:"net"}],[{title:"🆕 YouTube Premium ( On Mail )", command:"GYT"}],[{title:" Amazon Prime", command:"ama"}],[{title:" Express Vpn", command:"vpn"}],[{title:" Crunchyroll", command:"crun"}]]



Bot.sendInlineKeyboard(buttons,"📨You Can Exchange Your Point to Many Premium Accounts.\n\n🔄Exchange Point to ~\n👉Netflix Account [[ 4 Point ]].\n👉Youtube Premium On Mail [[ 13 Point ]].\n👉Amazon Prime Account [[ 8 Point ]].\n👉Express Vpn Account [[ 5 Point ]].\n👉Crunchyroll Account [[ 2 Point ]].")
