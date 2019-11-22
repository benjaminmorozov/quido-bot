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
  if(message.channel.id === '617351547130478621') {
    return;
  } else {
    if(message.channel.type == 'text') {
      //post in the guild's log channel               #logs
      var log = message.guild.channels.find('id', '617351547130478621');
      if (log != null) {
        const deleteEmbed = new Discord.RichEmbed()
          .setColor('0xff5353')
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
          .setTitle(`Message deleted in #${message.channel.name}`)
          .setDescription(`${message.cleanContent}`)
          .setTimestamp()
          .setFooter(`ID: ${message.id}`);
          log.send(deleteEmbed);
        }
      };
    };
});

client.on('messageUpdate', function(oldMessage, newMessage) {
  if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
    //post in the guild's log channel               #logs
    var log = newMessage.guild.channels.find('id', '617351547130478621');
    if (log != null) {
      const updateEmbed = new Discord.RichEmbed()
        .setColor('#45b6fe')
        .setAuthor(`${newMessage.author.username}#${newMessage.author.discriminator}`, newMessage.author.avatarURL)
        .setTitle(`Message edited in #${newMessage.channel.name}`)
        .setDescription(`**Before:** ${oldMessage.cleanContent}\n**+After:** ${newMessage.cleanContent}`)
        .setTimestamp()
        .setFooter(`ID: ${newMessage.id}`);
      log.send(updateEmbed);
    }
  };
});

client.on('guildBanAdd', function(guild, user, reason) {
    //post in the guild's log channel
    var log = guild.channels.find('id', '617351547130478621');
    if (log != null) {
      const banEmbed = new Discord.RichEmbed()
        .setColor('0xff5353')
        .setAuthor(`[BAN] ${user.username}#${user.discriminator}`, user.avatarURL)
        log.send(banEmbed);
    };
});

client.on('guildBanRemove', function(guild, user) {
  //post in the guild's log channel
  var log = guild.channels.find('id', '617351547130478621');
  if (log != null) {
    const unbanEmbed = new Discord.RichEmbed()
      .setColor('#90ee90')
      .setAuthor(`[UNBAN] ${user.username}#${user.discriminator}`, user.avatarURL)
      log.send(unbanEmbed);
  };
  let humans = member.guild.members.filter(m => !m.user.bot).size;
  guild.channels.find('id', '617353228069240833').setName(`Member Count: ${humans}`);
  let bots = member.guild.members.filter(m => m.user.bot).size;
  guild.channels.find('id', '617353228597592066').setName(`Bot Count: ${bots}`);
});

//user has joined a guild
client.on('guildMemberAdd', function(guild, user) {
  //post in the guild's log channel
  var log = guild.channels.find('id', '617351547130478621');
  if (log != null) {
    const updateEmbed = new Discord.RichEmbed()
      .setColor('#45b6fe')
      .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
      .setTitle(`Member joined`)
      .setDescription(`${user} count to join\ncreated ${member.user.createdAt}`)
      .setTimestamp()
      .setFooter(`ID: ${user.id}`);
    log.send(updateEmbed);
  };
  let humans = member.guild.members.filter(m => !m.user.bot).size;
  guild.channels.find('id', '617353228069240833').setName(`Member Count: ${humans}`);
  let bots = member.guild.members.filter(m => m.user.bot).size;
  guild.channels.find('id', '617353228597592066').setName(`Bot Count: ${bots}`);
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
