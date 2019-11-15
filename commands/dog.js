const Discord = require("discord.js");
const request = require('request');
const fetch = require('node-fetch');
exports.run = async (client, message, args) => {
    const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
    const dogEmbed = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(`Here’s your Fresh and Instant Doggo ❤️:`)
      .setImage(url)
      .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
    message.channel.send(dogEmbed);
};
