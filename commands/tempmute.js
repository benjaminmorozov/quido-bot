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
      message.channel.send(`${member} has been muted by ${message.author} for a duration of ${ms(ms(mutetime))} for: ${reason}`);
      member.send(`${member}, you have been muted by ${message.author} for a duration of ${ms(ms(mutetime))} for: ${reason}`)

      setTimeout(function(){
        member.removeRole(muterole.id, `Temporary mute expired.`);
      }, ms(mutetime));
    };
    } else {
    if(member.roles.has('613347276647039016')) {
      if(message.member.roles.has(muterole.id))
        return message.channel.send(`Sorry ${message.author}, this member is already muted.`)

      await(member.addRole(muterole.id));
      message.channel.send(`${member} has been muted by ${message.author} for a duration of ${ms(ms(mutetime))} for: ${reason}`);
      message.member.send(`${member}, you have been muted by ${message.author} for a duration of ${ms(ms(mutetime))} for:${reason}`)

      setTimeout(function(){
        member.removeRole(muterole.id, `Temporary mute expired.`);
      }, ms(mutetime));
    } else {
        return message.reply('you cannot mute this member.');
    };
  };
};
