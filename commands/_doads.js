/*CMD
  command: /doads
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

var ads = Bot.getProperty("Ads System")

for (var i in ads) {
  Api.sendVideo({
    chat_id: ads[i],  // chat ID where the video will be sent
    video: "https://t.me/Sorav_Joshi/8",  // the URL or file ID of the video
    caption: `Dear [Subscribers], 
 
We want to express our heartfelt gratitude for being a part of our movie community. 🍿 Your presence makes this channel vibrant and full of cinematic enthusiasm! 

👏 Thank you for your support, engagement, and love for movies. We're committed to bringing you the best content, recommendations, and discussions. 

Stay tuned for more movie magic! 🎬✨ `,  // caption text for the video
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Join Us", url: "t.me/film_nest" }],
                [{ text: "Movie 🍿 Request Group", url: "t.me/movies_samrajya" }
            ]
        ]
    },
});

}
Bot.run({
  command: "/doads",
  run_after: 25000 //time in second
})
