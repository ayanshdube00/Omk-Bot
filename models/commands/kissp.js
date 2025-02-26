module.exports.config = {
  name: "kissp",
  version: "3.2",
  hasPermssion: 1,
  credits: "@Hazeyy",
  description: "( 𝙍𝙖𝙣𝙙𝙤𝙢 pussikis 𝙂𝙞𝙛 )",
  commandCategory: "random-gif",
  usages: "( kisspusi Gif )",
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
     "https://i.postimg.cc/KjLJwR7q/1.gif",
"https://i.postimg.cc/zfBp5dSR/91fea1737989a057137c3c07df8560cf.gif",
"https://i.postimg.cc/43mvjYs6/detail-2.gif",
"https://i.postimg.cc/DZ4g48Nv/tumblr-m742cbe-Lyr1rat3p6o1-500.gif",
"https://i.postimg.cc/gkWDrcHp/tumblr-mju1prx-Ox-T1rke3fuo1-400.gif",
"https://i.postimg.cc/FHFVgP6n/tumblr-mxten51-GCl1smtpyco1-500.gif",
"https://i.postimg.cc/htCbCLW4/tumblr-n66ny2-AOCN1tck5t9o1-500.gif",
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

    api.sendMessage({ body: `kis'𝗌 pussi 𝗀𝗂𝖿 𝖣𝖺𝖽𝖽𝗒 𝖼𝗁𝗂𝗅𝗅🥴: ${links.length}`, attachment }, event.threadID, () => fs.unlinkSync(filePath));
  };

  return request(encodeURI(randomLink))
    .pipe(fs.createWriteStream(filePath))
    .on("close", () => callback());
};