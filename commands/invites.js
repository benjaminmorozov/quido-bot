exports.run = (client, message) => {
    const targetUser = message.mentions.users.first() || message.author;

    message.guild.fetchInvites()
	.then
	(invites =>
		{
			const userInvites = invites.array().filter(o => o.inviter.id === targetUser.id);
			var userInviteCount = 0;
				for(var i=0; i < userInvites.length; i++)
				{
					var invite = userInvites[i];
					userInviteCount += invite['uses'];
				}
			if(targetUser.id == message.author.id)
				message.reply(`You have invited ${userInviteCount} user(s) to this server. Keep up the good work!`);
			else
				message.channel.send(`User _${targetUser.username}_ has invited ${userInviteCount} user(s) to this server.`);
		}
    )
    .catch(console.error);
}