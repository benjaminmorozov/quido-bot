exports.run = (client, message) => {
    message.channel.send({embed: {
        color: 0xff5353,
        author: {
        name: `${message.guild.name}`,
        icon_url: `${message.guild.iconURL}`
        },
        thumbnail: {
            "url": `${message.guild.iconURL}`
        },
        description: "A Czech/English gaming Discord server for everyone.",
        fields: [{
            name: "Server Owner:",
            value: "`<@529057345599307776>`",
            inline: "true"
            },
            {
            name: "Bot Prefix:",
            value: `**${client.config.prefix}**,
            inline: "true"
            },
            {
            name: "User Count:",
            value: `${message.guild.members.filter(member => !member.user.bot).size},
            inline: "true"
            },
            {
            name: "Staff List:",
            value: "<#638804758240559154>",
            inline: "true"
            },
            {
            name: "Server Creation Date:",
            value: `${message.channel.guild.createdAt.toUTCString().substr(0, 16)}`,
            inline: "true"
            },
        ],
        footer: {
        icon_url: `${client.user.avatarURL}`,
        text: "Thanks for being a part of our community ❤️"
        }
    }
    })
}
