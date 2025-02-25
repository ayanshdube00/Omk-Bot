module.exports.config = {
        name: "say2",
        version: "1.0.2",
        permission: 0,
        credits: "nayan",
        prefix: true,
        description: "check the amount of yourself or the person tagged",
        category: "without prefix",
        usages: "[tag]",
        cooldowns: 5
};





  module.exports.run = async function({ api, event, args }) {
        try {
                const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
                const { resolve } = global.nodemodule["path"];
                var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
                var languageToSay