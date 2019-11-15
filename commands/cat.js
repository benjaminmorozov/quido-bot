const Discord = require("discord.js");
const request = require('request');
const fetch = require('node-fetch');
exports.run = (client, message, args) => {
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    const catEmbed = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(`Here’s your Fresh and Instant Cat ❤️:`)
      .setImage(file)
      .setFooter('If you find a bug, please report it to our staff. ❤️', 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp');
    message.channel.send(catEmbed);
};
