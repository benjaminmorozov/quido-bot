const snekfetch = require('snekfetch');

exports.run = (client, message, args) => {
  const { body } = await snekfetch
      .get('https://www.reddit.com/r/hentai/hot.json')
      .query({ limit: 800 });
  const randomnumber = Math.floor(Math.random() * allowed.length)
  const embed = new Discord.RichEmbed()
  .setColor(0x00A2E8)
  .setImage(allowed[randomnumber].data.url)
  message.channel.send(embed)
};
