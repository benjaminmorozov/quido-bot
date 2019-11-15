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
  	.addField('# **Misc**', '`q!avatar` - Display the avatar of any member of this server.\n`q!help` - Display a list of all the commands.\n`q!server` - Display the server info.\n`q!userinfo` - Display some info about a member of this server.', false)
    .addField('# **Mod**', '`q!addrr` - After reacting to a set message, user will be given a defined role.\n`q!ban` - Ban an user.\n`q!clearwarns` - Clear warns of a set user.\n`q!gcreate` - Create a giveaway in a set channel.\n`q!kick` - Kick an user.\n`q!mute` - Mute an user.\n`q!mutelist` - Display a list of all muted members on the server.\n`q!purge` - Purges/Clears a defined amount of messages.\n`q!say` - Makes the bot send a custom message.\n`q!setstatus` - Change the "playing" status of the bot user.\n`q!tempmute` - Temporarily mute a member for defined amount of time.\n`q!unmute` - Unmute an user.\n`q!warn` - Warn an user. After an enough number of warnings, the user will be punished.\n`q!warns` - Display the number of warnings a user has been given.', false)
  	.setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);

  message.channel.send(baseEmbed);
};
