exports.run = (client, message) => {
    message.channel.send({embed: {
        color: 0xff5353,
        author: {
          name: '13 Commands:',
        },
        thumbnail: {
            "url": "http://giphygifs.s3.amazonaws.com/media/MF1kR4YmC2Z20/giphy.gif"
          },
        fields: [{
          name: "Fun:",
          value: `__${client.config.prefix}cat__ - Get an instant picture of a cute cat. (usage: ${client.config.prefix}cat)\n__${client.config.prefix}dog__ - Get an instant picture of a cute dog. (usage: ${client.config.prefix}dog)\n__${client.config.prefix}8ball__ - Ask a question to the mystic 8ball. (usage: ${client.config.prefix}8ball <question>)`
          },
          {
            name: "Mod:",
            value: `__${client.config.prefix}ban__ - Bans an user. (usage: ${client.config.prefix}ban <@user> <reason>)\n__${client.config.prefix}kick__ - Kicks an user. (usage: ${client.config.prefix}kick <@user> <reason>)\n__${client.config.prefix}mute__ - Mutes an user. (usage: ${client.config.prefix}mute <@user> <reason>\n__${client.config.prefix}purge__ - Deletes a custom amount of messages. (usage: ${client.config.prefix}purge <amount>)\n__${client.config.prefix}unmute__ - Unmutes an user. (usage: ${client.config.prefix}unmute <@user>)`
          },
          {
            name: "Utils:",
            value: "$avatar - Displays an avatar of the mentioned user/you.\n$help - Show all the commands.\n$report - Report an user to the server admins.\n$server - Informations about the server.\n$user-info - Displays informations about you.",
            inline: "true"
          }
        ],
        footer: {
          icon_url: 'https://images.discordapp.net/avatars/220644154177355777/bd6b28005c26d079486063a4976dfb44.png',
          text: "If you find a bug, please report it to our staff. ❤️"
        }
      }
    })
};
