module.exports.config = {
  name: "ADMIN-ONLY",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PRINCE BABU",
  description: "THIS BOT IS MR PRINCE MEGHWANSI",
  commandCategory: "ADMIN-BOT-REPLY-MESSAGE",
  usages: "MENTION-BOT-ADMIN",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61571109624076") {
    var aid = ["61571109624076"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["मेरी बॉस  सोनम सिंह बाबू सो गई है━━•☆__❤️__🤸‍♂️", "वो अपने हस्बैंड के साथ बिजी है क्या बोलना है मुझे बोलो 🏃🙅❁•═════", "देखो प्लीज मेरी  सोनम सिंह बाबू बॉस जॉब पर है तो प्लीज उसे परेशान ना करो━━•☆__🤸‍♂️---❤️ ", "😘मेरी  सोनम सिंह बाबू__बॉस_❤️_को सब बुलाते हैं हमको तो कोई घास भी नहीं डालता है🥺____❤️ ❀❁•════", "मेरी बॉस सोनम सिंह बाबू पानी लाने गए  है तो प्लीज उससे पानी लाने दे परेशान मत करो━━•☆🤸‍♂️______❤️ ", "मेरी  बॉस  सोनम सिंह बाबू भाग गई लगता है 🏃━━•☆🤣" , "मेरी बॉस  सोनम सिंह बाबू को अभी मत बुलाओ कॉल पर क्योंकि वह भी अपने बाबू का चुम्मा लेने गई है_____🤸‍♂️_😁😁😄" , "मेरी बॉस  सोनम सिंह बाबू को भी परेशान मत करो वह आराम कर रही है अभी समझ गए ना आप______❤️ __🤸‍♂️💜" , " जब देखो SM SM SM कुछ और काम भी कर लो━━•☆❤️ 🏃_______🤸‍♂️" , " उसका रिचार्ज खत्म हो गया है जाओ रिचार्ज करवा उसका फिर बुलाना उसे━━•☆❤️______❤️____🤸‍♂️" , " प्लीज  सोनम सिंह बाबू को मत बुलाओ वरना वह फिर मुझ पर गुस्सा करेंगी और मुझे पिटेगी ━━•☆___❤️ ___❤️ 🤸‍♂️ " , "मेरी बॉस  सोनम सिंह के सर में दर्द हो रहा है तो उसे अभी सोने दो अभी━━•☆❤️_🏃___🤸‍♂️" , " सब मेरे  सोनम सिंह बॉस को बुलाते रहते हैं हमे तो कोई प्यार भी नही करता 😔━━•☆🥺___❤️____🏃__🤸‍♂️" , " पहले मेरे  बॉस  सोनम सिंह के लिए चाय बना कर लेकर आओ फिर बुलाना उसे__❤___💜___🤸‍♂️" , " देखो मेरी  सोनम सिंह बाबू बॉस को मत बुलाओ तुम उसे डिस्टर्ब करोगे फिर वह मुझे पिटेगी __❤️__💜━━•☆🤸‍♂️" , " मेरी  सोनम सिंह बाबू बॉस को डिस्टर्ब ना करो वह अभी बिजी है अपने हस्बैंड के साथ━━•☆❤️___❤️___🤸‍♂️" , " मेरी  सोनम सिंह बाबू बॉस का डाटा खत्म हो गया 15 रिचार्ज करो अभी━━•☆❤️___🤸‍♂️💜"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
