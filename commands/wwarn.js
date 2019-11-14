const Discord = require("discord.js");
const Enmap = require("enmap");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dmmi0dioj6mpk', 'sqknbmnacknhag', '0bcf997703be2c1aadb5bb882fa5d5ae2f46b23b710dfd6edc949bfcf9342908', {
	host: 'ec2-54-228-252-67.eu-west-1.compute.amazonaws.com',
	dialect: 'postgres',
	logging: false,
});
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
const splitArgs = commandArgs.split(' ');
const tagName = splitArgs.shift();
const tagDescription = splitArgs.join(' ');

exports.run = async (client, message, args, sequelize) => {
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
