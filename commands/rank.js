const { Canvas } = require('canvas-constructor');
const { Attachment } = require('discord.js');
const { resolve, join } = require('path');
const fetch = require('node-fetch');

const imageUrlRegex = /\?size=2048$/g;
const placeholder = new Map();

const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@quido-bot-sku03.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
const Score = require("../models/score.js")

exports.run = async (client, message, args) => {
  Score.findOne({userID: message.author.id, serverID: message.guild.id}, (err, score) => {
    const buffer = await profile(message, score.score);
    const filename = `profile-${message.author.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await message.channel.send(attachment);
  })
};

const profile = async function(message, score) {
  Score.findOne({userID: message.author.id, serverID: message.guild.id}, (err, score) => {
  const member = message.member;

  try {
    const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, '?size=128'));
    if (!result.ok) throw new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.displayName.length > 30 ? member.displayName.substring(0, 17) + '...'
      : member.displayName;

    return new Canvas(400, 180)
      .setColor('#7289DA')
      .addRect(84, 0, 316, 180)
      .setColor("#2C2F33")
      .addRect(0, 0, 84, 180)
      .addRect(169, 26, 231, 46)
      .addRect(224, 108, 176, 46)
      .setShadowColor('rgba(22, 22, 22, 1)')
      .setShadowOffsetY(5)
      .setShadowBlur(10)
      .addCircle(84, 90, 62)
      .addCircularImage(avatar, 85, 90, 64)
      .save()
      .createBeveledClip(20, 138, 128, 32, 5)
      .setColor('#23272A')
      .fill()
      .restore()
      .setTextAlign('center')
      .setTextFont('18pt Klavika Regular')
      .setColor('#FFFFFF')
      .addText(name, 285, 54)
      .addText(`Level: test`, 84, 159)
      .setTextAlign('left')
      .addText(`Score: ${score.score}`, 241, 136)
      .toBuffer();
  } catch (error) {
    await message.channel.send(`An error occurred: **${error.message}**`);
  }
});
}
