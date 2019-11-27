const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const booru = require('booru');
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send(':underage: NSFW Command. Please switch to NSFW channel in order to use this command.')
    var hentai = "sex"
    var query = "yaoi";
    booru.search('gelbooru', [query], {nsfw: true, limit: 1, random: true })
      .then(booru.commonfy)
      .then(images => {
        for (let image of images) {
          const embed = new Discord.RichEmbed()
            .setImage(image.common.file_url)
            .setURL(image.common.file_url);
          return message.channel.send({ embed });
        };
      });
};
