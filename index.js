const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const ytdl = require('ytdl-core');
const { RichEmbed } = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

client.on('ready', () => {
  console.log(`Successfully loaded and logged in as ${client.user.tag}.`);
  client.user.setPresence({ game: { name: "Quido's Club > All", type: 0 } });
});

client.on('messageDelete', function(message) {
  if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
    //post in the guild's log channel               #logs
    var log = newMessage.guild.channels.find('id', '617351547130478621');
    if (log != null) {
      const baseEmbed = new Discord.RichEmbed()
        .setColor('0xff5353')
        .setAuthor(`${newMessage.author.username}#${newMessage.author.discriminator}`, newMessage.author.avatarURL)
        .setTitle(`Message deleted in #${newMessage.channel.name}`)
        .setDescription(`${message.cleanContent}`)
        .setTimestamp()
        .setFooter(`ID: ${newMessage.id}`);
      log.send(baseEmbed);
    }
  };
});

client.on('messageUpdate', function(oldMessage, newMessage) {
  if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
    //post in the guild's log channel               #logs
    var log = newMessage.guild.channels.find('id', '617351547130478621');
    if (log != null) {
      const baseEmbed = new Discord.RichEmbed()
        .setColor('#45b6fe')
        .setAuthor(`${newMessage.author.username}#${newMessage.author.discriminator}`, newMessage.author.avatarURL)
        .setTitle(`Message edited in #${newMessage.channel.name}`)
        .setDescription(`**Before:** ${oldMessage.cleanContent}\n**+After:** ${newMessage.cleanContent}`)
        .setTimestamp()
        .setFooter(`ID: ${newMessage.id}`);
      log.send(baseEmbed);
    }
  };
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);
