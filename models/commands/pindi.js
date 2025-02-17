module.exports.config = {
  name: "pindi",
  version: "2.0.5",
  hasPermssion: 0,
  credits: "Ayansx",
  description: "photo",
  usePrefix: true,
  commandCategory: "Fun picture ",
  usages: "type pindi",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/qxRFLTK.jpeg" ,

     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     Dn't mind.🙆🏻`,attachment: fs.createReadStream(__dirname + "/cache/AOV.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/AOV.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/AOV.jpg")).on("close",() => callback());
   };
