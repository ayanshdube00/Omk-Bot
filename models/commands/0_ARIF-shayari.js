const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "shayari",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Mod by Meera Rajput",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["जिंदगी देने वाले  मरता छोड़ गये  अपनापन जताने वाले तन्हा छोड़ गये💔   जब पड़ी जरूरत हमें अपने हमसफर की  वो जो साथ चलने वाले रास्ता मोड़ गये।💔 😢", "वो तो दिवानी थी मुझे तन्हां छोड़ गई  खुद न रुकी तो अपना साया छोड़ गई💔  दुख न सही गम इस बात का है  आंखो से करके वादा होंठो से तोड़ गई।😭😭", "इंसान के कंधों पर ईंसान जा रहा था  कफ़न में लिपटा अरमान जा रहा था  जिन्हें मिली बे-वफ़ाई महोब्बत में  वफ़ा की तलाश में श्मशान जा रहा था।😭 💔 😢", "ना पूछ मेरे सब्र की इंतहारहा तक है  तू सितम कर ले  तेरी हसरत जहाँ तक है  वफ़ा की उम्मीद  जिन्हें होगी उन्हें होगी  हमें तो देखना है  तू 💔बेवफ़ा कहाँ तक है।😭😭", "आग दिल में लगी जब वो खफ़ा हुए  महसूस हुआ तब  जब वो जुदा हुए  करके वफ़ा कुछ दे ना सके वो  पर बहुत कुछ दे गए जब वो 💔बेवफ़ा हुए!💔 💔 😭", "प्यार करने का हुनर हमें आता नहीं  इसीलिए हम प्यार की बाज़ी हार गए😢  हमारी ज़िन्दगी से उन्हें बहुत प्यार था  शायद इसीलिए वो हमें ज़िंदा ही मार गए!😭 💔 😢", "हमनें अपनी साँसों पर उनका नाम लिख लिया  नहीं जानते थे कि हमनें कुछ गलत किया  वो प्यार का वादा करके हमसे मुकर गए  ख़ैर उनकी बेवाफाई से हमनें कुछ तो सबक लिया!😢", "चलो तुम्हारे😎 💞प्यार में कुछ तो बन गए,* *तुम्हारे 🚶शौहर न बन सके तो 😝 शायर ही बन गए .......✍🏻*", "#Attitude😏 के 👉#बाजार 🌆में जीने 🚶🏻का अलग 😎ही #मजा😉 है लोग👉👦#जलना 😡नहीं❌ #छोड़ते 😠 और➡ #हम_मुस्कुराना 😄", "👉Are Pagli..👸🏻 अब तु ❤जल्दी से मान जा, 💃🏻 अब😗 रोज-रोज सरीफ 😈 रहने की Acting नही होती 😘😍", "🗣#बोला_था_ना_की🏇 #एंट्री_भलेही_लेट_होगी #लेकिन✌ #सबसे👌 #ग्रेट_होगी. #जिंन्दगी #जीते_हे_हम #शानसे.😎 #तभी_तो_दुश्मन_जलते_हे_हमारे_नाम_से. 💘 may all best frnds.......💘😈", "👉 🐅 शेर को जगाना, ऒर हमे सुलाना ☺ किसी के बस _की _बात नही. 🔫 ɦʊʍ _😎 वहाँ 🚶 खड़े होते हॆ, जहाँ ʍattɛʀ 👊 बड़े होते हॆ..🔫🔫 👈", "#‎तुम्हारा‬ 👩 तो ‪#‎गुस्सा‬ 😡 भी ‪#‎इतना_प्यारा‬ 😘 हे के, ‪#‎दिल_करता‬ ❤ हे ‪#‎दिन_भर‬ ☝ तुम्हे ‪#‎तंग_करते‬ 😍 रहैं ।। 😘👩", "#चाहता ☺ तो #हूँ कि #हर_रोज ☝ आपको #अनमोल_खजाना 📦 भेजू #दोस्तों, 👫 पर #मेरे_दामन 👦 मे #दुआओं ☝ के #सिवा_कुछ 😌 भी #नहीं ।। 😌😌", "#सुन_पगले 👦 #में 👩 #वक्त 🕔 के साथ #अपने_शोक 😉 #बदलती_हूँ, ☝ #दोस्त_नहीं ।।", "😎🌹😘😘#फर्क तो अपने-अपने #सोच में है.... वरना👉👬👬👬 #दोस्ती भी💏👩‍❤‍👩💑👨‍❤‍👨 #मोहब्बत से कम नही होती.....!!!!😘", "अपना 😊तो कोई दोस्त नही😓 है, सब साले👫 कलेजे 💟के टुकडे है ।।💗👫😘", "दोस्ती का रिश्ता दो अंजानो को जोड देता है  हर कदम पर जिन्दगी को नया मोड देता है  सच्चा दोस्त साथ देता है तब  जब अपना साया भी साथ छोड देता है.", "ना gaadi🚘… ना bullet🏍 … ना ही रखे हथियार 🔫 … एक है सीने में जिगरा 😈 और दुसरे ✌ जिगरी 😉yaar 👬 😚 Enjoy today my best friend I........ HaTE.......... LoVEr", "दोस्तों की कमी को पहचानते है हम  दुनियाँ के गमों को भी जानते है हम  आप जैसे दोस्तों के ही सहारे  आज भी हँस कर जीना जानते है हम", "#दोस्त 👬 तुम #पत्थर ☝भी #मारोगे 😩 तो भर लेंगे #झोली_अपनी, 😘 क्योंकि #हम 👦 #यारों 👬 के #तोहफ़े 🎁 #ठुकराया 😕 नहीं #करते !!😘😘", "कुछ सालों बाद ना जाने क्या होगा  ना जाने कौन दोस्त कहाँ होगा  फिर मिलना हुआ तो मिलेगे यादों में  जैसे सूखे हुए गुलाब मिले किताबों में.", "दिल टूटने💔 पर भी जो आपसे शिकायत तक ना करे,,😷 उससे ज्यादा मोहब्बत कोई और आपको नहीं कर सकता 💔", "उठाकर🌹फूल की🍁पत्ती उसने बङी नजाकत से मसल दी, . . इशारो इशारो मेँ कह दिया की हम💔दिल का👈 ये हाल करते है.  🌹🌹", "न जाने किस बात पे नाराज़ है वो हमसे.....!!👰 ख्वाबों में भी मिलती है, तो बात नहीं करती......!!💔💔💔", "is karon gi😔🤲", "तेरे गुरूर 😒 को देखकर तेरी तमन्ना ही छोड़ 💔 दी हमने, जरा हम भी तो देखे 👀 कौन चाहता है तुम्हे हमारी 👫 तरह…!! 😏" , "🔥🔥आज अचानक कोई मुझसे लिपट कर बहुत रोया😓.. कुछ देर बाद एहसास हुआ ये तो मेरा ही साया है..🔥🔥" , "🔥🔥जला डालो जिसको जलाना है लो हमने तो सरेआम दिल रख दिया है।😔🔥🔥" , "हम तो उसकी 👸 हर ख़्वाहिश ✍ पूरी करने का वादा 🙌 कर बैठे थे, हमें क्या पता हमको छोड़ना ❌ भी उसकी एक 👈 ख़्वाहिश 😔 थी। 💔" , "👉🏻जानिऐ अपने 😘प्यार का भविष्यߑꊠ📲type कीजीऐ ❤Love <अपना नाम> 👍🏻space <अपने साथी का नाम> . और 📩send कीजीऐ, . . . . . अपने पापा के मोबाईल पर 👉🏻Try it😜" , "#हँसी_तो_फँसी 😝 #गलत_है, 😌 #हंसा_तो_फंसा 😜 होना #चाहिए, ☝ क्योंकी जब #लड़की_हँसती 👩 है तो #फसता 😝 तो #लड़का 👦 ही #है_ना ।।  😜😂" , "ठण्डा पानी 💦तो मैंने सिर्फ एक☝ गिलास🥛 पिया था 😬 बोतलें माँ 👩ने 4 भरवा दी मुझसे " , "किसीको मुझसे🙂 कोई शिकायत ☹हो, तो एक ☝पर्ची 📃में लिखकर ✍डस्टबीन में डाल ✊दो !!😉" , "हर कामयाब स्टूडेंट🤓के पीछे, माँ 👫 की चप्पल का हाथ 👋होता है !!" , "#इतनी ☝ भी नफरत 👺 न कर 😕 मुझसे 👨 #ऐ_ज़िन्दगी 💓 #में 👉 इंसान 👤 हूँ कोई 🙂 करेले 🌵 की #सब्जी_नही" , "#रोनी 🙂 टोनी 😇 सोनी ☺ यहां तक 👇 कि पप्पू 😒 की भी 👉 💑 #GF_है 😎 #फिर ☝ हम 👨 साला काहे 😫 single 👤 #है_यार" , "#हिचकी 😌 बहुत तेज़ 😤 आ #रही_है 👈 #याद 😍 कर रही हो ☝ या गाली 🗣 दे #रही_हो  😘👩" , "#वो 👦 #मेरी_जिंदगी 👩#क्या_बनायेगा, 😌 जिसे #मैगी_नूडल्स 🍜 बनाना "];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  var msg = {
      body: `🍀🍒${name}🍒🍀,

      ${rand}

    ཫ༄𒁍≛⃝𝐌𝐫.𝐏𝐫𝐢𝐧𝐜𝐞💙💦🍒`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
