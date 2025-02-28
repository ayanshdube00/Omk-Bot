const fs = require("fs");
module.exports.config = {
	name: "chips",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "aysnx", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "chips",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chips")==0 || event.body.indexOf("CHIPS")==0 || event.body.indexOf("Chips")==0 || event.body.indexOf(".chips")==0) {
		var msg = {
				body: "💝 YE LO BBY CHIPS KHAO 🥔\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲 𝗠𝗿..Ayanshx❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/ARIF-BABU/CHIPS.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
