module.exports = {
	name: 'kick',
    description: 'Kick a user.',
    guildOnly: true,
    args: true,
	execute(message, args) {
		const taggedUser = message.mentions.users.first();
		if (args[0] === 'foo') {
			return message.channel.send('bar');
        }
		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};