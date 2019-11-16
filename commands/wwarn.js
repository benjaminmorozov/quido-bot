const Discord = require("discord.js");
const Enmap = require("enmap");
const Sequelize = require('sequelize');

exports.run = async (client, message, args, Sequelize, db) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    let member = message.mentions.members.first();

    const tags = db.define('tags', {
      name: {
        type: Sequelize.STRING,
        unique: true,
      },
      description: Sequelize.TEXT,
      username: Sequelize.STRING,
      warns: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    });

    const tag = await tags.create({
      name: member.username,
      description: 'warns',
      username: member.id,
    });

    return message.reply(`db check successful.`);
};
