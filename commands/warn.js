const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@quido-bot-sku03.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
const Warns = require("../models/warns.js")

exports.run = async (client, message, args) => {
  let warnstoadd = 1;
  let reason = args.join(" ").slice(22);
  if(!reason) reason = "No reason provided.";
  const member = message.mentions.users.first()
  Warns.findOne({userID: member.id, serverID: message.guild.id}, (err, warns) => {
    if(err) console.log(err);
    if(!warns){
      const newWarns = new Warns({
        userID: member.id,
        serverID: message.guild.id,
        reason: reason,
        warns: warnstoadd
      })

      newWarns.save().catch(err => console.log(err));
    } else {
      warns.warns = warns.warns + warnstoadd;
      warns.save().catch(err => consolelog(err));
    }

    let embed = new Discord.RichEmbed()
    .setTitle("Score")
    .setColor("#117EA6")
    .setThumbnail(member.displayAvatarURL);
    if(!warns){
      embed.addField("Score", "0", true);
      return message.channel.send(embed);
    } else {
      embed.addField("Score", warns.warns, true);
      return message.channel.send(embed);
    }
  })
};
