const Discord = require('discord.js');
module.exports = {
	name: 'sayy',
    description: 'Kick a user.',
    guildOnly: true,
    args: false,
	execute(message, args) {
		const taggedUser = message.mentions.users.first();
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		
        message.channel.send(`${args}`);
        message.delete(1);
    }
}
