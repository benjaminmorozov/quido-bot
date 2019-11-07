const Discord = require("discord.js");
exports.run = (client, message) => {
  const exampleEmbed = new Discord.RichEmbed()
  	.setColor('0xff5353')
  	.setTitle('🔰 List of all commands:')
  	.setThumbnail('http://giphygifs.s3.amazonaws.com/media/MF1kR4YmC2Z20/giphy.gif')
  	.addField('Fun', 'Some value here')
  	.addBlankField()
  	.addField('Misc', 'Some value here', true)
  	.addField('Mod', 'Some value here', true)
  	.setFooter('Thanks for being a part of our community. ❤️', 'https://images.discordapp.net/avatars/220644154177355777/bd6b28005c26d079486063a4976dfb44.png');

  message.channel.send(exampleEmbed);
};
