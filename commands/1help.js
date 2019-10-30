module.exports = {
	name: 'help',
    description: 'Show all the commands.',
    guildOnly: true,
    args: false,
	execute(message, args) {
		message.channel.send({embed: {
            color: 3447003,
            author: {
              name: '4 Commands:',
            },
            thumbnail: {
                "url": "http://giphygifs.s3.amazonaws.com/media/MF1kR4YmC2Z20/giphy.gif"
              },
            fields: [{
                name: "Utils:",
                value: "$avatar - Displays an avatar of the mentioned user/you.\n$help - Show all the commands.\n$server - Informations about the server.\n$user-info - Displays informations about you.",
                inline: "true"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: 'https://images.discordapp.net/avatars/220644154177355777/bd6b28005c26d079486063a4976dfb44.png',
              text: "If you find a bug, please report it to our staff. ❤️"
            }
          }
    })
}
}