const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const ytdl = require('ytdl-core');
const { RichEmbed } = require('discord.js');
const client = new Discord.Client();
const getImages = require('./util/getImages');

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
      getImages(message).forEach((image, index) => {
      //post in the guild's log channel               #logs
      var log = message.guild.channels.find('id', '617351547130478621');
      if (log != null) {
        const deleteEmbed = new Discord.RichEmbed()
          .setColor('#FF470F')
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
          .setDescription(`**Message sent by ${message.author} deleted in ${message.channel}**\n${message.cleanContent}`)
          .setImage(image)
          .setTimestamp()
          .setFooter(`Author: ${message.author.id} | Message ID: ${message.id}`);
        log.send(deleteEmbed);
      };
      });
    };
    };
});

client.on('messageUpdate', function(oldMessage, newMessage) {
  if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
    getImages(newMessage).forEach((image, index) => {
    //post in the guild's log channel               #logs
    var log = newMessage.guild.channels.find('id', '617351547130478621');
    if (log != null) {
      const updateEmbed = new Discord.RichEmbed()
        .setColor('#117EA6')
        .setAuthor(`${newMessage.author.username}#${newMessage.author.discriminator}`, newMessage.author.avatarURL)
        .setDescription(`**Message edited in ${newMessage.channel}**`)
        .addField('Before', `${oldMessage.cleanContent}`, false)
        .addField('After', `${newMessage.cleanContent}`, false)
        .setImage(image)
        .setTimestamp()
        .setFooter(`Author: ${newMessage.author.id} | Message ID: ${newMessage.id}`);
      log.send(updateEmbed);
    };
  });
  };
});

client.on('guildBanAdd', function(guild, user, reason) {
    //post in the guild's log channel
    var log = client.guild.channels.find('id', '617351547130478621');
    if (log != null) {
      const banEmbed = new Discord.RichEmbed()
        .setColor('#FF470F')
        .setAuthor(`[BAN] ${user.username}#${user.discriminator}`, user.avatarURL)
        .addField('User', `${user}`, false)
        .addField('Reason', `${reason}`, false)
        .setImage(user.avatarURL);
        log.send(banEmbed);
    };
});

client.on('guildBanRemove', function(guild, user) {
  //post in the guild's log channel
  var log = client.guild.channels.find('id', '617351547130478621');
  if (log != null) {
    const unbanEmbed = new Discord.RichEmbed()
      .setColor('#90ee90')
      .setAuthor(`[UNBAN] ${user.username}#${user.discriminator}`, user.avatarURL)
    log.send(unbanEmbed);
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    guild.channels.find('id', '617353228069240833').setName(`Member Count: ${humans}`);
    let bots = member.guild.members.filter(m => m.user.bot).size;
    guild.channels.find('id', '617353228597592066').setName(`Bot Count: ${bots}`);
  };
});

//user has joined a guild
client.on('guildMemberAdd', function(guild, user) {
  //post in the guild's log channel
  var log = client.guild.channels.find('id', '617351547130478621');
  if (log != null) {
    const updateEmbed = new Discord.RichEmbed()
      .setColor('#45b6fe')
      .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
      .setTitle(`Member joined`)
      .setDescription(`${user} count to join\ncreated ${member.user.createdAt}`)
      .setTimestamp()
      .setFooter(`ID: ${user.id}`);
    log.send(updateEmbed);
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    guild.channels.find('id', '617353228069240833').setName(`Member Count: ${humans}`);
    let bots = member.guild.members.filter(m => m.user.bot).size;
    guild.channels.find('id', '617353228597592066').setName(`Bot Count: ${bots}`);
    var welcomechannel = guild.channels.find('id', '631083427936075789');
    welcomechannel.send(`${user} **joined**`);
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
