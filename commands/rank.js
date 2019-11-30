const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const fetch = require("node-fetch"); // This is to fetch the user avatar and convert it to a buffer.
const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@quido-bot-sku03.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
const Score = require("../models/score.js")

const imageUrlRegex = /\?size=2048$/g;

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
  });
  async function profile(member, score) {
    try {
      const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
      if (!result.ok) throw new Error("Failed to get the avatar.");
      const avatar = await result.buffer();

      // The reason for the displayName length check, is we don't want the name of the user going outside
      // the box we're going to be making later, so we grab all the characters from the 0 index through
      // to the 17th index and cut the rest off, then append `...`.
      const name = member.displayName.length > 20 ? member.displayName.substring(0, 17) + "..." : member.displayName;

      // ...
    };
    return new Canvas(400, 180)
  }
  const buffer = await profile(message.member, score.score);
  const filename = `profile-${message.author.id}.jpg`;
  const attachment = new Attachment(buffer, filename);
  await message.channel.send(attachment);
};
