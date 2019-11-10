const Discord = require("discord.js");
const request = require('request');
const rp = require('random-puppy');
exports.run = (client, message, args) => {
  var subreddits = [
    'rarepuppers'
  ]
  var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
  try {
    rp(sub).then(url=> {
      const dogEmbed = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(`Here’s your Fresh and Instant Doggo ❤️:`)
      .setImage(url)
      .setFooter('If you find a bug, please report it to our staff. ❤️', 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp');
    message.channel.send(dogEmbed);
              })
          ;
  } catch(e) {
    console.log(e);
  };
};