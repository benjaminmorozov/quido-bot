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
				message.reply(`You've invited **${userInviteCount} member(s)** to this server. Thank you 🥰!`);
				if(userInviteCount === 0)
					message.reply(`You haven't invited any members to this server. 😦`);
			else
				message.channel.send(`**${targetUser.username}** has invited **${userInviteCount} member(s)** to this server.`);
				if(userInviteCount === 0)
					message.reply(`**${targetUser.username}** hasn't invited any members to this server. 😦`);
		}
    )
    .catch(console.error);
}