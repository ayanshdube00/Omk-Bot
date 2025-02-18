module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "SHANKAR SIR🙏",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

const shayariList = [
"बिन तेरे मेरी हर खुशी अधूरी है, फिर सोच मेरे लिए तू कितनी जरूरी है", 
"कितना चाहते हैं तुमको ये कभी कह नहीं पाते, बस इतना जानते हैं, की तेरे बिना रह नहीं पाते",
"सीने से लगाकर तुमसे बस इतना ही कहना है, मुझे जिंदगी भर आपके ही साथ रहना है !",
"सीने से लगाकर तुमसे बस इतना ही कहना है, मुझे जिंदगी भर आपके ही साथ रहना है !",
"इस मोहब्बत के रिश्ते को हम शिद्दत से निभाएंगे साथ अगर तुम दो तो हम दुख को भी हराएंगे",
"दुनिया को खुशी चाहिए, और मुझे हर खुशी में तुम",
"कुछ सोचता हूं तो तेरा ख्याल आ जाता है कुछ बोलता हूं तो तेरा नाम आ जाता है",
"कब तक छुपा के रखूं दिल की बात को तेरी हर अदा पर मुझे प्यार आ जाता है",
"कुछ लोग दिल में रहते हैं हमेशा, जिन्हें जुबां पर लाने की ज़रूरत नहीं होती",
"हमेशा उसी रास्ते पर चले हैं हम, जहां भीड़ नहीं होती, अपनी अलग पहचान होती है",
"ये मत समझना हम तुम्हारे काबिल नहीं, जो हमें पाना चाहता है, उसे हम हासिल नहीं",
"आग लगाने का हुनर हमें आता नहीं, पर अगर लोग जल जाएं हमारी सादगी से, इसमें हमारी खता नहीं",
"नाम नहीं चाहिए हमें किसी के सहारे, हमारी शोहरत खुद ब खुद आसमान को छूती है",
"तुझसे हर मुलाकात अधूरी लगती है, चाहता हूँ कि ये लम्हे कभी खत्म ना हों",
"बेवजह मुस्कुरा देता हूँ, और यूँ ही अपने आधे दुश्मनों को हरा देता हूँ",
];
const imgLinks = [
"https://i.imgur.com/JBK7kxK.jpeg",
"https://i.imgur.com/DoGrVqs.jpeg",
"https://i.imgur.com/FwP8H1F.jpeg",
"https://i.imgur.com/kcefAi0.jpeg",
"https://i.imgur.com/0z8NWtN.jpeg",
"https://i.imgur.com/uBGX4e5.jpeg",
"https://i.imgur.com/mCVNEXQ.jpeg",
"https://i.imgur.com/qfGcjF4.jpeg",
"https://i.imgur.com/uixAjP1.jpeg",
"https://i.imgur.com/R4BI2oK.jpeg",
];

let lastSentHour = null;

const sendHourlyMessages = async (api) => {
  try {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentHour = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();

    if (minutes !== 0 || lastSentHour === currentHour) return;
    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = indiaTime.getDate();
    const month = months[indiaTime.getMonth()];
    const year = indiaTime.getFullYear();
    const day = days[indiaTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message = `❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n` +
      `✰ 𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `✰ 𝗗𝗔𝗧𝗘 ➪ ${date}✰${month}✰${year} 📆\n` +
      `✰ 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `❁ ━━━━━ ❃ 🩷 ❃ ━━━━━ ❁`;

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    const activeThreads = threadList.filter(thread => thread.isSubscribed);

    const sendPromises = activeThreads.map(async (thread) => {
      await api.sendMessage(
        { body: message, attachment: await axios.get(randomImage, { responseType: "stream" }).then(res => res.data) },
        thread.threadID
      );
    });

    await Promise.all(sendPromises);
    console.log("Message sent to all groups successfully!");
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
};

module.exports.handleEvent = async ({ api }) => {
  setInterval(() => {
    sendHourlyMessages(api);
  }, 60000);
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage("Hourly announcements are now active! Messages will be sent every hour (24/7).", event.threadID);
};