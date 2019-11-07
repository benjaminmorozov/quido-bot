const Discord = require("discord.js");
exports.run = (client, message) => {
  const exampleEmbed = new Discord.RichEmbed()
  	.setColor('0xff5353')
  	.setTitle('🔰 List of all commands:')
  	.setAuthor('Quido’s Club', 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp')
  	.setDescription('Some description here')
  	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
  	.addField('Regular field title', 'Some value here')
  	.addBlankField()
  	.addField('Inline field title', 'Some value here', true)
  	.addField('Inline field title', 'Some value here', true)
  	.addField('Inline field title', 'Some value here', true)
  	.setImage('https://i.imgur.com/wSTFkRM.png')
  	.setTimestamp()
  	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

  channel.send(exampleEmbed);
};
