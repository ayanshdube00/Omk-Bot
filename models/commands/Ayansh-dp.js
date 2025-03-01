const axios = require("axios");

module.exports.config = {
  name: "Aynsdp",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Ayanshx", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "mention",
  cooldowns: 5, 
};

const imgurLink = "https://i.ibb.co/7d9g3J4y/481698911-1200816758043661-170311540644864906-n-jpg-stp-dst-jpg-s640x640-tt6-nc-cat-105-ccb-1-7-nc-s.jpg";

module.exports.handleEvent = async function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.startsWith("@Ayansh") || event.body.startsWith("ayansh") || event.body.startsWith("@ayansh") || event.body.startsWith("Ayansh")) {
    try {
      const response = await axios.get(imgurLink, { responseType: "stream" });
      var msg = {
        body: "",
        attachment: response.data
      };
      api.sendMessage(msg, threadID, messageID);
      api.setMessageReaction("😎", messageID, (err) => {}, true);
    } catch (error) {
      console.error("Failed to fetch image:", error.message);
    }
  }
};

module.exports.run = function({ api, event }) {};
