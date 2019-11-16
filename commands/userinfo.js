exports.run = (client, message) => {
    const taggedUser = message.mentions.users.first() || message.author;

    message.channel.send({embed: {
        color: 0xff5353,
        author: {
          name: `${taggedUser.username}`,
        },
        thumbnail: {
            "url": `${taggedUser.avatarURL}`
          },
        fields: [{
            name: "Full Username:",
            value: `${taggedUser.username}#${taggedUser.discriminator}`,
            inline: "false"
          },
          {
            name: "User ID:",
            value: `${taggedUser.id}`,
            inline: "false"
          },
          {
            name: "User Roles:",
            value: `${taggedUser.roles.map(r => `${r}`).join(' | ')}`,
            inline: "false"
          },
        ],
        footer: {
          icon_url: `${client.user.avatarURL}`,
          text: "Thanks for being a part of our community ❤"
        }
      }
    });
}
