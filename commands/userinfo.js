const moment = require("moment");
exports.run = (client, message, args) => {
    const member = message.mentions.users.first() || message.author;

    if(args.includes('@'))
      return message.reply('mention a valid member of this server.');

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
