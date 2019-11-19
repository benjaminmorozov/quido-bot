const Discord = require("discord.js");
exports.run = (client, message) => {
  const baseEmbed = new Discord.RichEmbed()
  	.setColor('0xff5353')
  	.setTitle('🔰 List of all commands:')
  	.addField('**Server Rules**', '`q!8ball` - Ask the mystic 8-ball a question.\n`q!cat` - Display a random picture of a cute cat.\n`q!dog` - Display a random picture of a cute doggo.\n`q!nsfw` - Display a random NSFW picture.', false)
  	.setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);

  message.channel.send(baseEmbed);
};
