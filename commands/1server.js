module.exports = {
	name: 'server',
    description: 'Informations about the Server.',
    guildOnly: true,
    args: false,
	execute(message, args) {
		message.channel.send({embed: {
            color: 3447003,
            author: {
              name: 'Quido’s Club',
              icon_url: 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp'
            },
            thumbnail: {
                "url": "https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp"
              },
            description: "A Czech/English gaming Discord server for everyone.",
            fields: [{
                name: "Server Owner:",
                value: "<@529057345599307776>",
                inline: "true"
              },
              {
                name: "User Count:",
                value: `${message.guild.members.filter(member => !member.user.bot).size}`,
                inline: "true"
              },
              {
                name: "Staff List:",
                value: "<#638804758240559154>",
                inline: "true"
              },
              {
                name: "Creation Date:",
                value: `${message.channel.guild.createdAt.toUTCString().substr(0, 16)}`,
                inline: "true"
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp',
              text: "Thanks for being a part of our community ❤️"
            }
          }
    })
}
}