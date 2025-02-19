const fs = require("fs");
const path = require("path");
const axios = require("axios");

module.exports.config = {
  name: "ytshorts",
  hasPermission: 0,
  version: "1.0.0",
  description: "Automatically download YouTube Shorts videos based on provided link",
  credits: "SHANKAR",
  commandCategory: "Utility"
};

module.exports.handleEvent = async function ({ api, event }) {
  const message = event.body;

  // Check if the message contains a YouTube Shorts link
  const youtubeShortsRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
  const match = message.match(youtubeShortsRegex);

  if (match) {
    const url = match[0];

    try {
      const findingMessage = await api.sendMessage(`⏳ | शॉर्ट वीडियो डाउनलोड लिंक प्राप्त किया जा रहा है...`, event.threadID);

      const apiUrl = `https://mr-prince-malhotra-ytdl.vercel.app/video?url=${encodeURIComponent(url)}`;
      const response = await axios.get(apiUrl);
      const responseData = response.data;

      if (!responseData.result || !responseData.result.url) {
        await api.sendMessage(`❌ | शॉर्ट वीडियो के लिए कोई डाउनलोड लिंक नहीं मिला।`, event.threadID);
        return;
      }

      const downloadUrl = responseData.result.url;
      const title = responseData.result.title;
      const filePath = path.resolve(__dirname, "cache", `${Date.now()}-${title}.mp4`);

      const videoResponse = await axios.get(downloadUrl, {
        responseType: "stream",
        headers: { "User-Agent": "Mozilla/5.0" }
      });

      const fileStream = fs.createWriteStream(filePath);
      videoResponse.data.pipe(fileStream);

      fileStream.on("finish", async () => {
        const stats = fs.statSync(filePath);
        const fileSizeInMB = stats.size / (1024 * 1024);

        if (fileSizeInMB > 25) {
          await api.sendMessage(`❌ | "${title}" का साइज ${fileSizeInMB.toFixed(2)}MB है, जो 25MB से ज्यादा है।\n📥 डाउनलोड लिंक: ${downloadUrl}`, event.threadID);
          fs.unlinkSync(filePath);
          return;
        }

        await api.sendMessage({
          body: `🎥 | आपका शॉर्ट वीडियो "${title}" डाउनलोड हो गया है! 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷`,
          attachment: fs.createReadStream(filePath)
        }, event.threadID);

        fs.unlinkSync(filePath);
        api.unsendMessage(findingMessage.messageID);
      });

      videoResponse.data.on("error", async (error) => {
        console.error(error);
        await api.sendMessage(`❌ | शॉर्ट वीडियो डाउनलोड करने में समस्या हुई: ${error.message}`, event.threadID);
        fs.unlinkSync(filePath);
      });

    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      await api.sendMessage(`❌ | शॉर्ट वीडियो प्राप्त करने में समस्या हुई: ${error.response ? error.response.data : error.message}`, event.threadID);
    }
  }
};

module.exports.run = async function ({ api, event, args }) {
  // This command does nothing as it only handles events
};