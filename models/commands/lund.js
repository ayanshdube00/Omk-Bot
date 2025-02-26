const fs = require("fs");
module.exports.config = {
  name: "lund",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("lund") ||
     react.includes("LUND") || react.includes("land") || react.includes("lnd") ||
react.includes("laude") ||
react.includes("loda")) {
    var msg = {
        body: `लोहे का लन्ड है मेरा निकल के हाथ में दे दूंगा।😐😒👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }