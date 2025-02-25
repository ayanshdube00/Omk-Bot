module.exports.config = {
  name: "boom",
  version: "3.2",
  hasPermssion: 1,
  credits: "@Hazeyy",
  description: "( 𝙍𝙖𝙣𝙙𝙤𝙢 BooM 𝙂𝙞𝙛 )",
  commandCategory: "random-gif",
  usages: "( boom Gif )",
  cooldowns: 2,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, Users, Threads, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  var links = [
     "https://i.postimg.cc/W43LzFn1/dkUlEBe.gif",
"https://i.postimg.cc/mr5xHLXN/squeeze-dat-ass-001.gif",
"https://i.postimg.cc/V6rx9x2y/tumblr-0a7f78ae0514fd8654409bd7e2410068-a200b089-500.gif",
"https://i.postimg.cc/rs573S8Q/tumblr-os64hm-Sc-AN1smwom8o10-1280.gif",
    // Add more links here for GIFs or videos
  ];

  var randomLink = links[Math.floor(Math.random() * links.length)];
  var extension = randomLink.split(".").pop(); // Extract the file extension

  var fileName = `1.${extension}`; // Set the file name based on the extension
  var filePath = __dirname + "/cache/" + fileName; // Set the file path

  var callback = () => {
    var attachment;

    // Check the file extension and create the appropriate attachment
    if (extension === "gif") {
      attachment = fs.createReadStream(filePath);
    } else if (extension === "jpg" || extension === "jpeg" || extension === "png") {
      attachment = { path: filePath };
    } else if (extension === "mp4" || extension === "webm") {
      attachment = fs.createReadStream(filePath);
    }

    api.sendMessage({ body: `𝖧𝖾𝗋𝖾'𝗌 asss 𝗀𝗂𝖿 𝖣𝖺𝖽𝖽𝗒 𝖼𝗁𝗂𝗅𝗅🥴: ${links.length}`, attachment }, event.threadID, () => fs.unlinkSync(filePath));
  };

  return request(encodeURI(randomLink))
    .pipe(fs.createWriteStream(filePath))
    .on("close", () => callback());
};