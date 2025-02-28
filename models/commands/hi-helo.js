const axios = require("axios");

module.exports.config = {
  name: "hyy",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Ayanshx", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "mention",
  cooldowns: 5, 
};

const imgurLink = "https://i.ibb.co/QgC6J3R/467103674-1543760103681649-7897791213639059879-n-gif-nc-cat-111-ccb-1-7-nc-sid-cf94fc-nc-ohc-n9ng-Eo.gif";

module.exports.handleEvent = async function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.startsWith("hello") || event.body.startsWith("hy") || event.body.startsWith("Hy") || event.body.startsWith("hii")) {
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