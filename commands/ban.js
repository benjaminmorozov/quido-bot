const Discord = require("discord.js");
exports.run = async (client, message, args) => {
                                   //owner                blade                designer             main admin           admin
  if(!message.member.roles.some(r=>['610704273822711820','627253814717710370','622715668659437568','631922921475932170','616501517058310184','645728270519631889'].includes(r.id)))
    return message.reply("you don't have enough permissions to execute this command!");

  let reason = args.join(" ").slice(22);
  let member = message.mentions.members.first();
  let embeduser = member.user;
  if(!member)
    return message.reply("mention a valid member of this server.")

  if(!reason) reason = "No reason provided.";

  if(message.member.roles.some(r=>['630151131841953792'].includes(r.id))){
    await member.ban(reason);
    const banmuteEmbed = new Discord.RichEmbed()
      .setColor('#FF470F')
      .setAuthor(`[BAN] ${embeduser.username}#${embeduser.discriminator}`, embeduser.avatarURL)
      .setThumbnail(`${embeduser.avatarURL}`)
      .addField('Member:', `${member}`, true)
      .addField('Reason:', `${reason}`, true)
      log.send(banmuteEmbed);
    message.channel.send(banmuteEmbed);
  } else {
    if(member.roles.has('613347276647039016')) {
      await member.ban(reason);
      const banmuteEmbed = new Discord.RichEmbed()
        .setColor('#FF470F')
        .setAuthor(`[BAN] ${embeduser.username}#${embeduser.discriminator}`, embeduser.avatarURL)
        .setThumbnail(`${embeduser.avatarURL}`)
        .addField('Member:', `${member}`, true)
        .addField('Reason:', `${reason}`, true)
        log.send(banmuteEmbed);
      message.channel.send(banmuteEmbed);
    } else {
        return message.reply('you cannot ban this member.');
    };
  };
};
