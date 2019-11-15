const Discord = require("discord.js");
const request = require('request');
const fetch = require('node-fetch');
exports.run = async (client, args) => {
    const { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
    const dogEmbed = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(`Here’s your Fresh and Instant Cat ❤️:`)
      .setImage(message)
      .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
    message.channel.send(dogEmbed);
};
