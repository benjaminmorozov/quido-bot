const Discord = require("discord.js");
const request = require('request');
const fetch = require('node-fetch');
exports.run = async (client, message, args) => {
    const { message1 } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    const catEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(`Here’s your Fresh and Instant Doggo ❤️:`)
        .setImage(message1)
        .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
    message.channel.send(catEmbed);
};
