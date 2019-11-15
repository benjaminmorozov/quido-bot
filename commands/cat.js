const Discord = require("discord.js");
const request = require('request');
exports.run = (client, message, args) => {
  request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

  }, function(error, response, body) {
    if(!error && response.statusCode == 200) {
    const catEmbed = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(`Here’s your Fresh and Instant Cat ❤️:`)
      .setImage(response.request.uri.href)
      .setFooter('If you find a bug, please report it to our staff. ❤️', 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp');
    message.channel.send(catEmbed);
    } else {
      console.log(error);
    }
  })
};
