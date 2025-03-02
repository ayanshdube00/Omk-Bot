const dipto = require('axios');

const fs = require('fs-extra');

const path = require('path');

const moment = require('moment-timezone');

const pathFile = __dirname + '/cache/d1p.txt';

if (!fs.existsSync(pathFile))

fs.writeFileSync(pathFile, 'true');

const isEnable = fs.readFileSync(pathFile, 'utf-8');

module.exports.config = {

name: "prefix",

version: "1.0.0",

hasPermssion: 0,

credits: "AYANSX",

description: "guide",

commandCategory: "system",

usages: "",

cooldowns: 5,

};

module.exports.handleEvent = async ({ api, event }) => {

if (isEnable == "true"){

const dipto2 = event.body ? event.body.toLowerCase() : '';

// const GP = "•┄┅════❁🌺❁════┅┄•\n${GP}\n•┄┅════❁🌺❁════┅┄•\n\n"; 

// ===== SAMRAT 𝗕𝗢𝗧 ====="

let d1PInfo = await api.getThreadInfo(event.threadID);

let diptoName = d1PInfo.threadName;

var time = moment.tz("Asia/Up").format("LLLL");

const text = `✨[ 𝐏𝐑𝐄𝐅𝐈𝐗 𝐄𝐕𝐄𝐍𝐓 ]✨\n𝐍𝐚𝐦𝐞~𝐒𝐦𝐚𝐫𝐭 \n𝐑𝐨𝐛𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱~ ｢ ${global.config.PREFIX} ｣\n𝐑𝐨𝐛𝐨𝐭 𝐂𝐦𝐝~ ｢ ${client.commands.size} ｣\n𝐓𝐢𝐦𝐞~${time}\n_𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞_\n${diptoName}\n♛\n•─┼ 𝐜𝐫𝐞𝐚𝐭𝐞 𝐛𝐲 Samrat •─┼`

//const text2 = text[Math.floor(Math.random() * text.length)];

const imgur = ["https://i.imgur.com/vxD578e.jpeg"]

const link = imgur[Math.floor(Math.random() * imgur.length)];

const res = await dipto.get(link, { responseType: 'arraybuffer' })

const ex = path.extname(link);

const filename = __dirname + `/cache/Shaon${ex}`;

fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));

if (dipto2.indexOf("prefix") ===0|| dipto2.indexOf("Prefix") ===0 )

{

api.sendMessage({body:`${text}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)

}

}

}

module.exports.run = async ({api,args, event}) => {

try {

if (args[0] == 'on') {

fs.writeFileSync(pathFile, 'true');

api.sendMessage('no prefix on successfully', event.threadID, event.messageID);

}

else if (args[0] == 'off') {

fs.writeFileSync(pathFile, 'false');

api.sendMessage('no prefix off successfully', event.threadID, event.messageID);

}

else if (!args[0]){

api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);

}

}

catch(e) {

console.log(e);

}

}