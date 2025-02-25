const fetch = require('node-fetch');
const os = require('os');
const fs = require('fs');
const language = process.env.REPL_LANGUAGE;
const platform = os.platform();
const architecture = os.arch();
const cpuModel = os.cpus()[0].model;
const uptime = os.uptime();
const nodejs = process.version;
global.client.timeStart = new Date().getTime();

module.exports.config = {
  name: "upt",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHANKAR",
  description: "कोई प्रीफिक्स नहीं",
  commandCategory: "बिना आदेश के",
  usages: "बॉट के ऑनलाइन समय को देखें",
  cooldowns: 5
};

function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const xuly = Math.floor((Date.now() - global.client.timeStart) / 4444);
  const trinhtrang = xuly < 10 ? "  अच्‍छा ✔️" : xuly > 10 && xuly < 100 ? "स्थिर" : "धीमा";
  
  if (!event.body) return;

  const { threadID, messageID } = event;

  if (event.body.toLowerCase().indexOf("upt") == 0) {
    const time = process.uptime(),
          gio = Math.floor(time / (60 * 60)),
          phut = Math.floor((time % (60 * 60)) / 60),
          giay = Math.floor(time % 60);
    
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString('en-US', { 
      hour12: true, 
      timeZone: 'Asia/Kolkata' 
    });
    const formattedDate = currentDate.toLocaleDateString('en-GB', { 
      timeZone: 'Asia/Kolkata' 
    });
    const formattedDay = currentDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      timeZone: 'Asia/Kolkata' 
    });

    const responseMessage = `❁ ━━━[ 𝗨𝗣𝗧𝗜𝗠𝗘 ]━━━ ❁\n\n` +
                            `✰ 𝗥𝗨𝗡 ➪ ${gio}ʜ ${phut}ᴍ ${giay}ꜱ\n` +
                            `✰ 𝗧𝗜𝗠𝗘 ➪ ${formattedTime}\n` +
                            `✰ 𝗗𝗔𝗧𝗘 ➪ ${formattedDate}\n` +
                            `✰ 𝗗𝗔𝗬 ➪ ${formattedDay}\n` +
                            `━━━━━━━━━━━━━━━\n` +
                            `𝗠𝗔𝗗𝗘 𝗕𝗬 𝗦𝗠𝗔𝗥𝗧 𝗦𝗛𝗔𝗡𝗸𝗔𝗥`;

    api.sendMessage(responseMessage, event.threadID, event.messageID);
  }
};

module.exports.run = () => {};