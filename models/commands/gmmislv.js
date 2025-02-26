module.exports.config = {
	name: "gmmislv",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("Good morning")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("Good morning all")==0 || event.body.indexOf("Good Morning Everyone")==0 || event.body.indexOf("gm all")==0 || event.body.indexOf("GM sbko")==0 || event.body.indexOf("GOOD MORNING")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("MORNING")==0 || event.body.indexOf("GM ALL")==0 ) { 
		var msg = {
				body: `«࿙❰༗ོ⍣𓆩${name}𓆪ོ༗❱࿚»\n━━━━❖❖💠❖❖━━━━\n𑁍𝆊𝐕𝐞𝐫𝐲 𝆊𝐆𝐨𝐨𝐝 𝆊𝐌𝐨𝐫𝐧𝐢𝐧𝐠 𝆊𝐃𝐞𝐚𝐫𑁍\n━━━━❖❖💠❖❖━━━━`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌄", event.messageID, (err) => {}, true)
    };
	if (event.body.indexOf("Love You")==0 || event.body.indexOf("LOVE YOU")==0 || event.body.indexOf("Bot I love you")==0 || event.body.indexOf("BOT I LOVE YOU")==0 || event.body.indexOf("i love you")==0 || event.body.indexOf("I love you bot")==0 || event.body.indexOf("love uhh")==0 || event.body.indexOf("Bot love you")==0 || event.body.indexOf("I love you bot")==0 || event.body.indexOf("Lub u bot")==0 || event.body.indexOf("Luv bot")==0 || event.body.indexOf("Bot Luv you")==0 || event.body.indexOf("Love you")==0 || event.body.indexOf("LOVE you")==0 || event.body.indexOf("I Love You Bot")==0 || event.body.indexOf("I Love You")==0 || event.body.indexOf("love You")==0 || event.body.indexOf("Bot lov u")==0 || event.body.indexOf("i love bot")==0 ) { 
		var msg = {
				body: `𒁍 𓆩๛⃝ ‎‎‎‎‎‎‎‎${name}‣᭄𓆪 𑁍 ̽•››̈̈️𒊯\n═══════════════\n𝗜 𝗟𝗼𝘃𝗲 𝗬𝗼𝘂 𝗦𝗼 𝗠𝘂𝗰𝗵 𝗠𝘆 𝗛𝗲𝗮𝗿𝘁𝗯𝗲𝗮𝘁 💓💋`
      }
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    };
	if (event.body.indexOf("Miss You")==0 || event.body.indexOf("MISS YOU")==0 || event.body.indexOf("Bot I Miss You")==0 || event.body.indexOf("BOT I MISS YOU")==0 || event.body.indexOf("i miss you")==0 || event.body.indexOf("I miss you bot")==0 || event.body.indexOf("mich you")==0 || event.body.indexOf("Bot miss you")==0 || event.body.indexOf("I miss you bot")==0 || event.body.indexOf("mich u bot")==0 || event.body.indexOf("Miss you")==0 || event.body.indexOf("Bot miss you")==0 || event.body.indexOf("I miss you")==0 || event.body.indexOf("Miss u bot")==0 || event.body.indexOf("I Miss U Bot")==0 || event.body.indexOf("I Miss You")==0 || event.body.indexOf("miss You")==0 || event.body.indexOf("Bot miss u")==0 || event.body.indexOf("i miss bot")==0 ) { 
		var msg = {
				body: `‣⃟ ⃝𑁍${name}ـ圓‣⃟𑁍\n═══════════════\n𝐌𝐚𝐢𝐧 𝐛𝐡𝐢 𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐘𝐚𝐚𝐝𝐨 𝐦𝐚𝐢𝐧 𝐊𝐡𝐨𝐲𝐚 𝐑𝐚𝐡𝐭𝐚 𝐡𝐮 🙃 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 💗`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }