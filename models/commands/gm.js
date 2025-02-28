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

const imgurLink = "https://i.ibb.co/gMHsxrmM/481846140-1375982787166741-5863945781615120926-n-jpg-stp-dst-jpg-p480x480-tt6-nc-cat-102-ccb-1-7-nc.jpg" ,""https://i.ibb.co/wNbWdZQ0/481731626-1305310810504120-7051884851648639123-n-jpg-stp-dst-jpg-p480x480-tt6-nc-cat-105-ccb-1-7-nc.jpg";

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
      api.setMessageReaction("🩷", messageID, (err) => {}, true);
    } catch (error) {
      console.error("Failed to fetch image:", error.message);
    }
  }
};

module.exports.run = function({ api, event }) {};