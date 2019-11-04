exports.run = (client, message) => {
    const taggedUser = message.mentions.users.first() || message.author;

    message.channel.send({embed: {
        color: 0xff5353,
        author: {
          name: `${taggedUser.username}#${taggedUser.discriminator}`,
        },
        image: {
            url: `${taggedUser.avatarURL}`,
        },
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp',
          text: "Thanks for being a part of our community ❤️"
        }
      }
    });
}