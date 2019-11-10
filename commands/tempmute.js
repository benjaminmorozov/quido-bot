const ms = require("ms");

exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

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

    let OwnerRole = message.guild.roles.find("name", "🔱OWNER🔱");
    let DiscordManagerRole = message.guild.roles.find("name", "Discord Manager & Designer");
    if (message.member.roles.has(OwnerRole.id) || message.member.roles.has(DiscordManagerRole.id)) {

      if(message.member.roles.has(muterole.id))
        return message.channel.send(`Sorry ${message.author}, this user is already muted.`)

      // Mute the user
      await(member.addRole(muterole.id));
      message.channel.send(`<@${member.id}> has been muted by ${message.author.tag} for a duration of ${ms(ms(mutetime))} for: ${reason}`);
      member.send(`${member.id}, you have been muted by ${message.author.tag} for a duration of ${ms(ms(mutetime))} for: ${reason}`)

      setTimeout(function(){
        member.removeRole(muterole.id, `Temporary mute expired.`);
      }, ms(mutetime));
    } else {
      if(!member.kickable)
        return message.channel.send(`Sorry ${message.author}, you cannot mute this user.`);

      if(message.member.roles.has(muterole.id))
        return message.channel.send(`Sorry ${message.author}, this user is already muted.`)

      await(member.addRole(muterole.id));
      message.channel.send(``<@${member.id}> has been muted by ${message.author.tag} for a duration of ${ms(ms(mutetime))} for: ${reason}`);
      member.send(`<@${member.id}>, you have been muted by ${message.author.tag} for a duration of ${ms(ms(mutetime))} for:${reason}`)

      setTimeout(function(){
        member.removeRole(muterole.id, `Temporary mute expired.`);
      }, ms(mutetime));
    };
};
