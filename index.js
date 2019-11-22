const Discord = require("discord.js");
const Enmap = require("enmap");
let request = require(`request`);
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
        message.attachments.forEach(a => {
          if(message.attachments.first().filename === `png`){//Download only png (customize this)
              request.get(a.url)
                .on('error', console.error)
                .pipe(fs.createWriteStream(`${a.filename}`));
          };
          const attachment = new Discord.Attachment(`./${a.filename}`);
      		log.send(`${message.author},`, attachment);
        });
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
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    guild.channels.find('id', '617353228069240833').setName(`Member Count: ${humans}`);
    let bots = member.guild.members.filter(m => m.user.bot).size;
    guild.channels.find('id', '617353228597592066').setName(`Bot Count: ${bots}`);
  };
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
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    guild.channels.find('id', '617353228069240833').setName(`Member Count: ${humans}`);
    let bots = member.guild.members.filter(m => m.user.bot).size;
    guild.channels.find('id', '617353228597592066').setName(`Bot Count: ${bots}`);
    var welcomechannel = guild.channels.find('id', '631083427936075789');
    message.channel.send(`${user} **joined**`);
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
