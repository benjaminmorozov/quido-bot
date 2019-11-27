const fs = require("moment");
exports.run = (client, message) => {
    const member = message.mentions.users.first() || message.author;

    message.channel.send({embed: {
        color: 0xff5353,
        author: {
          name: `${member.username}`,
        },
        thumbnail: {
            "url": `${member.avatarURL}`
          },
        fields: [{
            name: "Full Username:",
            value: `${member.username}#${member.discriminator}`,
            inline: "false"
          },
          {
            name: "Member ID:",
            value: `${member.id}`,
            inline: "false"
          },
          {
            name: "Member Join Date:",
            value: `${moment.utc(member.JoinedAt).format('DD/MM/YY')}`,
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
