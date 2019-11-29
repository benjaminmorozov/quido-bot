const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
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

client.on('messageDelete', async function(message) {
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

client.on('guildBanRemove', function(guild, user) {
  let embeduser = user;
  //post in the guild's log channel
  var log = client.guilds.find('id','610434388777369602').channels.find('id','617351547130478621');
  if (log != null) {
    const unbanEmbed = new Discord.RichEmbed()
      .setColor('#45b6fe')
      .setAuthor(`[UNBAN] ${embeduser.username}#${embeduser.discriminator}`, embeduser.avatarURL)
      .setThumbnail(`${embeduser.avatarURL}`)
      .addField('Member:', `${user}`, true)
      .setTimestamp()
      .setFooter(`Member ID: ${embeduser.id}`);
    log.send(unbanEmbed);
  };
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
  const guild = newMember.guild;

    //declare changes
    var Changes = {
        unknown: 0,
        addedRole: 1,
        removedRole: 2,
        username: 3,
        nickname: 4,
        avatar: 5
    };
    var change = Changes.unknown;

    //check if roles were removed
    var removedRole = '';
    oldMember.roles.every(function(value) {
        if(newMember.roles.find('id', value.id) == null) {
            change = Changes.removedRole;
            removedRole = value.name;
        }
    });

    //check if roles were added
    var addedRole = '';
    newMember.roles.every(function(value) {
        if(oldMember.roles.find('id', value.id) == null) {
            change = Changes.addedRole;
            addedRole = value.name;
        }
    });

    //check if username changed
    if(newMember.user.username != oldMember.user.username)
        change = Changes.username;

    //check if nickname changed
    if(newMember.nickname != oldMember.nickname)
        change = Changes.nickname;

    //check if avatar changed
    if(newMember.user.avatarURL != oldMember.user.avatarURL)
        change = Changes.avatar;

    //log to console
    switch(change) {
        case Changes.unknown:
            console.log('[' + guild.name + '][UPDUSR] ' + newMember.user.username + '#' + newMember.user.discriminator);
            break;
        case Changes.addedRole:
            console.log('[' + guild.name + '][ADDROLE] ' + newMember.user.username +'#' +  newMember.user.discriminator +
                ': ' + addedRole);
            break;
        case Changes.removedRole:
            console.log('[' + guild.name + '][REMROLE] ' + newMember.user.username + '#' + newMember.user.discriminator +
                ': ' + removedRole);
            break;
        case Changes.username:
            console.log('[' + guild.name + '][UPDUSRNM] ' + oldMember.user.username + '#' + oldMember.user.discriminator +
                ' is now ' + newMember.user.username + '#' + newMember.user.discriminator);
            break;
        case Changes.nickname:
            console.log('[' + guild.name + '][UPDUSRNK] ' + newMember.user.username + '#' + newMember.user.discriminator +
                (oldMember.nickname != null ? ' (' + oldMember.nickname + ')' : '') +
                (newMember.nickname != null ? ' is now ' + newMember.nickname : ' no longer has a nickname.'));
            break;
        case Changes.avatar:
            console.log('[' + guild.name + '][UPDAVT] ' + newMember.user.username + '#' + newMember.user.discriminator);
            break;
    }


    //post in the guild's log channel
    var log = client.guilds.find('id','610434388777369602').channels.find('id','617351547130478621');
    if (log != null) {
        switch(change) {
            case Changes.unknown:
                log.sendMessage('**[User Update]** ' + newMember);
                break;
            case Changes.addedRole:
                log.sendMessage('**[User Role Added]** ' + newMember + ': ' + addedRole);
                break;
            case Changes.removedRole:
                log.sendMessage('**[User Role Removed]** ' + newMember + ': ' + removedRole);
                break;
            case Changes.username:
                log.sendMessage('**[User Username Changed]** ' + newMember + ': Username changed from ' +
                    oldMember.user.username + '#' + oldMember.user.discriminator + ' to ' +
                    newMember.user.username + '#' + newMember.user.discriminator);
                break;
            case Changes.nickname:
                const updateEmbed = new Discord.RichEmbed()
                  .setColor('#117EA6')
                  .setTitle(`Nickname change`)
                  .setAuthor(`${newMember.user.username}#${newMember.user.discriminator}`, newMember.user.avatarURL)
                  .setDescription(`**Before:** ${oldMember.nickname}\n**After:** ${newMember.nickname}`)
                  .setTimestamp()
                  .setFooter(`Member ID: ${newMember.id}`);
                log.send(updateEmbed);
                break;
            case Changes.avatar:
                log.sendMessage('**[User Avatar Changed]** ' + newMember);
                break;
        }
    }

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
