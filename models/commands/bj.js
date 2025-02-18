module.exports.config = {
  name: "bj",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ayan",
  description: "random",
  commandCategory: "nsfw",
  usages: "@",
  cooldowns: 3,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://i.imgur.com/qxRFLTK.jpeg",
   
  ];
  var callback = () => api.sendMessage({ body: `All day I know Buscu Buslon. 😏`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));
  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
};