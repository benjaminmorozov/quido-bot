const Discord = require("discord.js");
const Enmap = require("enmap");
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://quido-bot-sku03.mongodb.net/test');

exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");
};
