const fs = require("fs");
module.exports.config = {
  name: "Sorry",
    version: "1.0.1",
  hasPermssion: 1,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("betaa")==0 || event.body.indexOf("meri billi mujhe hi meow")==0 || event.body.indexOf("Apne Malik se bakchodi")==0 || event.body.indexOf("bataun Abhi")==0) {
    var msg = {
        body: "𝐒0𝐑𝐑𝐘 𝐀𝐁 𝐆𝐀𝐋𝐓𝐈 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑𝐔𝐍𝐆𝐀 𝐏𝐋𝐒 𝐀𝐊 𝐁𝐀𝐑 𝐌𝐀𝐅 𝐊𝐀𝐑 𝐃0_🤐😙😥",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }