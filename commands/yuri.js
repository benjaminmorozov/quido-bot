const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://nekos.life/api/v2/img/yuri')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
        .setImage(response.body.url)
        .setURL(response.body.url);
  message.channel.send(lewdembed);
    })

}
