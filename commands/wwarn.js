const Discord = require("discord.js");
const Enmap = require("enmap");
const Sequelize = require('sequelize');

exports.run = async (client, message, args, sequelize) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    const Tags = sequelize.define('tags', {
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
    const splitArgs = args.split(' ');
    const tagName = splitArgs.shift();
    const tagDescription = splitArgs.join(' ');

    let member = message.mentions.members.first();

    const tag = await Tags.create({
      name: tagName,
      description: tagDescription,
      username: member.id,
    });

    return message.reply(`db check successful.`);
};
