const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
	name: 'setstatus',
    description: 'Changes the status of the bot.',
    guildOnly: true,
    args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
        }
	},
};