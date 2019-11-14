const Discord = require("discord.js");
const Enmap = require("enmap");
const Sequelize = require('sequelize');

exports.run = async (client, message, args, sequelize, Tags) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    let member = message.mentions.members.first();

    const tag = await Tags.create({
      name: tagName,
      description: tagDescription,
      username: member.id,
    });

    return message.reply(`db check successful.`);
};
