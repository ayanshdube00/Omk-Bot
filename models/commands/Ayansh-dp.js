const axios = require("axios");

module.exports.config = {
  name: "smratdp",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Ayanshx", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "mention",
  cooldowns: 5, 
};

const imgurLink = "https://i.ibb.co/JRVhgry1/474218768-1289672395592887-783903429045807969-n-jpg-stp-dst-jpg-s640x640-tt6-nc-cat-108-ccb-1-7-nc-s.jpg";

module.exports.handleEvent = async function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.startsWith("@Samrat") || event.body.startsWith("smrat") || event.body.startsWith("@Smrat") || event.body.startsWith("Samrat")) {
    try {
      const response = await axios.get(imgurLink, { responseType: "stream" });
      var msg = {
        body: "",
        attachment: response.data
      };
      api.sendMessage(msg, threadID, messageID);
      api.setMessageReaction("👑", messageID, (err) => {}, true);
    } catch (error) {
      console.error("Failed to fetch image:", error.message);
    }
  }
};

module.exports.run = function({ api, event }) {};
