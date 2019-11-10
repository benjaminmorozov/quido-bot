exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("please mention a valid member of this server.");

    let reason = args.splice(2).join(" ")

    if(!reason) reason = "No reason provided";

    let time = args[1];

    if(!time)
      return message.reply(`please, provide a duration of the mute.`);

    // This is the role you want to assign to the user
    let muterole = message.guild.roles.find(role => role.name == "Muted");

    let OwnerRole = message.guild.roles.find("name", "🔱OWNER🔱");
    let DiscordManagerRole = message.guild.roles.find("name", "Discord Manager & Designer");
    if (message.member.roles.has(OwnerRole.id) || message.member.roles.has(DiscordManagerRole.id)) {
      // Mute the user
      await(member.addRole(muterole.id));
      message.reply(`<@${member.id}> has been muted for ${ms(ms(mutetime))}`);

      setTimeout(function(){
        member.removeRole(muterole.id);
        message.channel.send(`<@${member.id}> has been unmuted!`);
      }, ms(mutetime));
    } else {
      if(!member.kickable)
      await(member.addRole(muterole.id));
      message.reply(`<@${member.id}> has been muted for ${ms(ms(mutetime))}`);

      setTimeout(function(){
        member.removeRole(muterole.id);
        message.channel.send(`<@${member.id}> has been unmuted!`);
      }, ms(mutetime));
    };
};
