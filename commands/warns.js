const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return
    message.reply("You don't have permssion to use this command");
    let wUser = message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0])
    if (!wUser) return message.reply("Couldn't find that user");
    if (warns[wUser.id] != undefined) {
        warnLevel = warns[wUser.id].warns
    }
    else {
        message.delete().catch();
  
        let warnembed = new Discord.RichEmbed()
          .setTitle("**warns**")
          .setColor("#0xff80ff")
          .addField("User Warns", warnlevel, true);
      
        message.channel.send(warnembed);
    }
  
    if (!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };
  
};