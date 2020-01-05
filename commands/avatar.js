exports.run = (client, message) => {
    const taggedUser = message.mentions.users.first() || message.author;

    message.channel.send({embed: {
        color: 0xff5353,
        author: {
          name: `${taggedUser.username}#${taggedUser.discriminator}`,
        },
        image: {
            url: taggedUser.displayAvatarURL,
        },
        footer: {
          icon_url: guild.icon_url,
          text: "Thanks for being a part of our community ❤️"
        }
      }
    });
}