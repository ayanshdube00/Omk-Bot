const axios = require("axios");

module.exports.config = {
  name: "gn",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Ayanshx", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "mention",
  cooldowns: 5, 
};

const imgurLink = "https://i.ibb.co/8L0JwRR2/480434649-1708116406723362-2593321473506199402-n-jpg-stp-dst-jpg-p480x480-tt6-nc-cat-101-ccb-1-7-nc.jpg";

module.exports.handleEvent = async function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.startsWith("gud nyt") || event.body.startsWith("Good Night") || event.body.startsWith("good night") || event.body.startsWith("Gud nini")) {
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