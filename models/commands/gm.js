const axios = require("axios");

module.exports.config = {
  name: "gm",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Ayanshx", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "mention",
  cooldowns: 5, 
};

const imgurLink = "https://i.imgur.com/mFipvrd.jpeg" ,"https://i.imgur.com/cVOOZ3c.jpeg" ,"https://i.imgur.com/U2Tf3hX.jpeg" ,"https://imgur.com/oD1YZcH";

module.exports.handleEvent = async function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.startsWith("gud morning") || event.body.startsWith("Good Morning") || event.body.startsWith("good morning") || event.body.startsWith("suprabhat")) {
    try {
      const response = await axios.get(imgurLink, { responseType: "stream" });
      var msg = {
        body: "",
        attachment: response.data
      };
      api.sendMessage(msg, threadID, messageID);
      api.setMessageReaction("😏", messageID, (err) => {}, true);
    } catch (error) {
      console.error("Failed to fetch image:", error.message);
    }
  }
};

module.exports.run = function({ api, event }) {};