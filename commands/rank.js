const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@quido-bot-sku03.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
const Score = require("../models/score.js")

exports.run = async (client, message, args) => {
  Score.findOne({userID: message.author.id, serverID: message.guild.id}, (err, score) => {
    if(err) console.log(err);

    let embed = new Discord.RichEmbed()
    .setTitle("Score")
    .setColor("#117EA6")
    .setThumbnail(message.author.displayAvatarURL);
    if(!score){
      embed.addField("Score", "0", true);
      return message.channel.send(embed);
    } else {
      embed.addField("Score", score.score, true);
      return message.channel.send(embed);
    }
  })
};
