const Discord = require("discord.js");
exports.run = (client, message) => {
  const baseEmbed = new Discord.RichEmbed()
  	.setColor('0xff5353')
  	.setTitle('New Free Game:')
    .setDescription('Bad North is now free on Epic Games Store until the 29th of November. After claiming, the game\'s yours to keep forever.')
  	.setThumbnail('./img.png')
  	.addField('**What?**', 'Bad North', false)
  	.addField('**Where?**', 'Epic Games Store', false)
  	.addField('**Until when?**', 'until the 29th of November', false)
    .addField(" ", "Bad North on Epic Games Store[link](https://www.epicgames.com/store/en-US/product/bad-north/)")
  	.setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);

  message.channel.send(baseEmbed);
};
