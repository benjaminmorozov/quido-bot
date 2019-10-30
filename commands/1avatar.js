const Discord = require('discord.js');
module.exports = {
	name: 'avatar',
    description: 'Displays an avatar of the mentioned user/you.',
    guildOnly: true,
    args: false,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
        }
        
        if (!message.mentions.users.size) {
            const user = message.mentions.users.first() || message.author;
            const avatarEmbed = new Discord.RichEmbed()
                .setColor(0x333333)
                .setAuthor(user.username)
                .setImage(user.avatarURL);
            message.channel.send(avatarEmbed);
        }
	},
};