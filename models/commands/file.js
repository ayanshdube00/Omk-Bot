module.exports.config = {
    name: "file",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "SHANKAR",
    description: "Delete file or folder in the commands folder",
    commandCategory: "Admin",
    usages: "\ncommands start <text>\ncommands ext <text>\ncommands <text>\ncommands [leave empty]\ncommands help\nNOTE: <text> is the text you fill in at your discretion",
    cooldowns: 5
};

module.exports.handleReply = ({ api, event, args, handleReply }) => {
    if(event.senderID != handleReply.author) return; 
    const fs = require("fs-extra");
    var arrnum = event.body.split(" ");
    var msg = "";
    var nums = arrnum.map(n => parseInt(n));

    for(let num of nums) {
        var target = handleReply.files[num-1];
        var fileOrdir = fs.statSync(__dirname+'/'+target);
        if(fileOrdir.isDirectory() == true) {
            var typef = "[Folder🗂️]";
            fs.rmdirSync(__dirname+'/'+target, {recursive: true});
        } else if(fileOrdir.isFile() == true) {
            var typef = "[File📄]";
            fs.unlinkSync(__dirname+"/"+target);
        }
        msg += typef + ' ' + handleReply.files[num-1] + "\n";
    }
    api.sendMessage("⚡️The following files have been deleted from the commands folder:\n\n" + msg, event.threadID, event.messageID);
}

module.exports.run = async function({ api, event, args, Threads }) {
    const permission = ["100058415170590","","",""];
    if (!permission.includes(event.senderID)) return api.sendMessage("[DEV MODE] This command can only be used by the Developer", event.threadID, event.messageID);
  
    const fs = require("fs-extra");
    var files = fs.readdirSync(__dirname+"/") || [];
    var msg = "", i = 1;

    if(args[0] == 'help') {
        var msg = `
How to use the command:
•Key: start <text>
•Effect: Filters files to be deleted that start with a chosen character
•Example: commands rank
•Key: ext <text>
•Effect: Filters files to be deleted with a chosen extension
•Example: commands a
•Key: leave empty
•Effect: Lists all files in cache
•Example: commands
•Key: help
•Effect: View how to use the command
•Example: commands help`;
    
        return api.sendMessage(msg, event.threadID, event.messageID);
    }
    else if(args[0] == "start" && args[1]) {
        var word = args.slice(1).join(" ");
        var files = files.filter(file => file.startsWith(word));
        
        if(files.length == 0) return api.sendMessage(`⚡️No files in cache start with: ${word}`, event.threadID ,event.messageID);
        var key = `⚡️There are ${files.length} files that start with: ${word}`;
    }
    else if(args[0] == "ext" && args[1]) {
        var ext = args[1];
        var files = files.filter(file => file.endsWith(ext));
        
        if(files.length == 0) return api.sendMessage(`⚡️No files in commands end with: ${ext}`, event.threadID ,event.messageID);
        var key = `⚡️There are ${files.length} files with the extension: ${ext}`;
    }
    else if (!args[0]) {
        if(files.length == 0) return api.sendMessage("⚡️Your commands folder has no files or folders", event.threadID ,event.messageID);
        var key = "⚡️All files in the commands folder:";
    }
    else {
        var word = args.slice(0).join(" ");
        var files = files.filter(file => file.includes(word));
        if(files.length == 0) return api.sendMessage(`⚡️No files contain the character: ${word}`, event.threadID ,event.messageID);
        var key = `⚡️There are ${files.length} files that contain the character: ${word}`;
    }
  
    files.forEach(file => {
        var fileOrdir = fs.statSync(__dirname+'/'+file);
        if(fileOrdir.isDirectory() == true) var typef = "[Folder🗂️]";
        if(fileOrdir.isFile() == true) var typef = "[File📄]";
        msg += (i++) + '. ' + typef + ' ' + file + '\n';
    });
    
    api.sendMessage(`⚡️Reply to this message with the number to delete the corresponding file. You can reply with multiple numbers separated by spaces.\n${key}\n\n` + msg, event.threadID, (e, info) => global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        files
    }))
}