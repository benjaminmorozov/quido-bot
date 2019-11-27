const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const subreddits = [
    "nsfw",
    "porn",
    "BonerMaterial",
    "adorableporn",
    "nsfw2",
    "Sexy",
    "NSFW_nospam"
]


exports.run = (client, message, args) => {
  var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
  if (!message.channel.nsfw) {
    message.react('💢');
    return message.channel.send(errMessage);
  }

  var randSubreddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

  randomPuppy(randSubreddit)
    .then(url => {
      const embed = new Discord.MessageEmbed()
        .setFooter(`${randSubreddit}`)
        .setDescription(`[Image URL](${url})`)
        .setImage(url)
        .setColor('#CEA0A6');
      return message.channel.send({ embed });
  });
};
