const axios = require("axios");

module.exports.config = {
  name: "lollipop",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Ayanshx", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "mention",
  cooldowns: 5, 
};

const imgurLink = "https://i.ibb.co/Qjvf7vrv/480392209-1138794847510317-3339442421468551272-n-jpg-stp-dst-jpg-p480x480-tt6-nc-cat-104-ccb-1-7-nc.jpg";

module.exports.handleEvent = async function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.startsWith("lollipop") || event.body.startsWith("lolipop") || event.body.startsWith("loli") || event.body.startsWith("Lolipop")) {
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