module.exports = {
  config: {
    name: "linkAutoDownload",
    version: "1.3.0",
    hasPermssion: 0,
    credits: "ARIF BABU",
    description:
      "Automatically detects links in messages and downloads the file.",
    commandCategory: "Utilities",
    usages: "",
    cooldowns: 5,
  },
  run: async function ({ events, args }) {},
  handleEvent: async function ({ api, event, args }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const content = event.body ? event.body : "";
    const body = content.toLowerCase();
    const { alldown } = require("arif-babu-media");
    if (body.startsWith("https://")) {
      api.setMessageReaction("😒", event.messageID, (err) => {}, true);
      const data = await alldown(content);
      console.log(data);
      const { low, high, title } = data.data;
      api.setMessageReaction("☺️", event.messageID, (err) => {}, true);
      const video = (
        await axios.get(high, {
          responseType: "arraybuffer",
        })
      ).data;
      fs.writeFileSync(
        __dirname + "/cache/auto.mp4",
        Buffer.from(video, "utf-8")
      );

      return api.sendMessage(
        {
          body: `•─┼ 𝐂𝐫𝐞𝐚𝐭𝐞 𝐛𝐲 𝐀𝐲𝐚𝐧𝐬𝐡 ፝─┼•\nᴛɪᴛʟᴇ: ${title}\n✨❁ ━━━━[ 😌 ]━━━━ ❁✨`,
          attachment: fs.createReadStream(__dirname + "/cache/auto.mp4"),
        },
        event.threadID,
        event.messageID
      );
    }
  },
};