const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
  const { body } = await snekfetch
      .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
      .query({ limit: 800 });
  const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
  const randomnumber = Math.floor(Math.random() * allowed.length)
  const embed = new Discord.RichEmbed()
  .setColor(0x00A2E8)
  .setImage(allowed[randomnumber].data.url)
  message.channel.send(embed)
};
