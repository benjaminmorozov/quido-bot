const Discord = require('discord.js');
module.exports = {
	name: 'user-info',
    description: 'Displays informations about you.',
    guildOnly: true,
    args: false,
	execute(message, args) {
		const taggedUser = message.mentions.users.first();
		if (args[0] === 'foo') {
			return message.channel.send('bar');
        }
		const userInfo = new Discord.RichEmbed()
		.setColor(0x333333)
		.setThumbnail(taggedUser.avatarURL)
		.setAuthor(taggedUser.username)
		.addField(`Full Username`,`${taggedUser.username}#${taggedUser.discriminator}`)
		.addField(`User ID`,`${taggedUser.id}`)
		.addField("Roles: ", + message.member.roles.map(role => role.name).join(", "));
		message.channel.send(userInfo);
}
}