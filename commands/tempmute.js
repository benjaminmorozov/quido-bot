const Discord = require("discord.js");
const ms = require("ms");
exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator","Head Moderator","Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("you don't have enough permissions to execute this command!");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("please mention a valid member of this server.");

    let reason = args.splice(2).join(" ")

    if(!reason) reason = "No reason provided";

    let mutetime = args[1];

    if(!mutetime)
      return message.reply(`please, provide a duration of the mute.`);

    // This is the role you want to assign to the user
    let muterole = message.guild.roles.find(role => role.name == "Muted");

    if(message.member.roles.some(r=>['630151131841953792'].includes(r.id))){
      if(message.member.roles.has(muterole.id)) {
        return message.channel.send(`Sorry ${message.author}, this member is already muted.`)
      } else {
      // Mute the user
      await(member.addRole(muterole.id));
      let embeduser = user;
      const opmuteEmbed = new Discord.RichEmbed()
        .setColor('#45b6fe')
        .setAuthor(`[TEMPMUTE] ${embeduser.username}#${embeduser.discriminator}`, embeduser.avatarURL)
        .addField('Member:', `${member}`, true)
        .addField('Muted by:', `${message.author}`, true)
        .addField('Mute duration:', `${mutetime}`, true)
        .addField('Reason:', `${reason}`, true)
        log.send(opmuteEmbed);
      message.channel.send(opmuteEmbed);
      setTimeout(function(){
        member.removeRole(muterole.id, `Temporary mute expired.`);
      }, ms(mutetime));
    };
    } else {
    if(member.roles.has('613347276647039016')) {
      if(message.member.roles.has(muterole.id))
        return message.channel.send(`Sorry ${message.author}, this member is already muted.`)

      await(member.addRole(muterole.id));
      const muteEmbed = new Discord.RichEmbed()
        .setColor('#45b6fe')
        .setAuthor(`[TEMPMUTE] ${embeduser.username}#${embeduser.discriminator}`, embeduser.avatarURL)
        .addField('Member:', `${member}`, true)
        .addField('Muted by:', `${message.author}`, true)
        .addField('Mute duration:', `${mutetime}`, true)
        .addField('Reason:', `${reason}`, true)
        log.send(muteEmbed);
      message.channel.send(muteEmbed);
      setTimeout(function(){
        member.removeRole(muterole.id, `Temporary mute expired.`);
      }, ms(mutetime));
    } else {
        return message.reply('you cannot mute this member.');
    };
  };
};
