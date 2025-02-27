const fs = require("fs");
module.exports.config = {
  name: "ldka",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "nam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@sinndi")==0 || event.body.indexOf("@dondi")==0 || event.body.indexOf("@londa")==0 || event.body.indexOf("@ladka")==0) {
    var msg = {
        body: "ye rha pimdi 🥹🥹🥹 👇🏻",
        attachment: fs.createReadStream(__dirname + `/cache/g`)
      }
if (!existsSync(dirMaterial + "")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/BtSlsSS.jpg", path);

}
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }