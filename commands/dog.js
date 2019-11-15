const Discord = require("discord.js");
const animals = require('random-animals-api');
exports.run = (client, message, args) => {
    animals.dog()
        .then(url =>
    const dogEmbed = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(`Here’s your Fresh and Instant Doggo ❤️:`)
      .setImage(url)
      .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`););
    message.channel.send(dogEmbed);
};
