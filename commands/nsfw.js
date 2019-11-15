const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
  randomPuppy()
      .then(url => {
        const dogEmbed = new Discord.RichEmbed()
            .setImage(url)
            .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
      message.channel.send(dogEmbed);
    });
};
