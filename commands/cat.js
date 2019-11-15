const Discord = require("discord.js");
const request = require('request');
var randomCat = require('random-cat');
exports.run = (client, message, args) => {
    var url = randomCat.get();
    const catEmbed = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(`Here’s your Fresh and Instant Cat ❤️:`)
      .setImage(url)
      .setFooter('If you find a bug, please report it to our staff. ❤️', 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp');
    message.channel.send(catEmbed);
};
