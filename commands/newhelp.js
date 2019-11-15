const Discord = require("discord.js");
exports.run = (client, message) => {
  const emojiNext = '➡'; // unicode emoji are identified by the emoji itself
  const emojiPrevious = '⬅';
  const reactionArrow = [emojiPrevious, emojiNext];
  const baseEmbed = new Discord.RichEmbed()
  	.setColor('0xff5353')
  	.setTitle('🔰 List of all commands:')
  	.setThumbnail('http://giphygifs.s3.amazonaws.com/media/MF1kR4YmC2Z20/giphy.gif')
  	.addField('# **Fun**', '`q!8ball` - Ask the mystic 8-ball a question.\n`q!cat` - Display a random picture of a cute cat.\n`q!dog` - Display a random picture of a cute doggo.\n`q!nsfw` - Display a random NSFW picture.', false)
  	.addField('# **Misc**', '`q!avatar` - Display the avatar of any member of this server.\`q!help` - Display all the commands.\n`q!server` - Display the server info.\n`q!userinfo` - Display some info about a member of this server.', false)
  	.setFooter('Thanks for being a part of our community. ❤️', 'https://images.discordapp.net/avatars/220644154177355777/bd6b28005c26d079486063a4976dfb44.png');

  message.channel.send(baseEmbed);
};
