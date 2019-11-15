const Discord = require("discord.js");
const Enmap = require("enmap");
const Sequelize = require('sequelize');

exports.run = async (client, message, args) => {
  var sequelize = new Sequelize('dmmi0dioj6mpk', 'sqknbmnacknhag', '0bcf997703be2c1aadb5bb882fa5d5ae2f46b23b710dfd6edc949bfcf9342908', {
    host: 'ec2-54-228-252-67.eu-west-1.compute.amazonaws.com',
    dialect: 'postgres',
    logging: false,
  });

  const tags = sequelize.define('tags', {
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
    tags.sync();
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    let member = message.mentions.members.first();

    const tag = await Tags.findOne({ where: { name: member.username } });
    if (tag) {
	     // equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
	     tag.increment('usage_count');
	     return message.channel.send(tag.get('description'));
     };

    return message.reply(`Could not find warns for user: ${member.username}`);
};