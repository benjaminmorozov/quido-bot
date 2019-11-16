exports.run = (client, message) => {
    const taggedUser = message.mentions.users.first() || message.author;

    const nitro = taggedUser.premium_type;
    if(taggedUser.premium_type === 1 || taggedUser.premium_type === 2) {
      let nitrostatus = "Member does have Nitro subscription purchased.";
    };
    if(taggedUser.premium_type === )
      let nitrostatus = "Member does not have the Nitro subscription.";
    };

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
            name: "Nitro:",
            value: `${nitrostatus}`,
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
