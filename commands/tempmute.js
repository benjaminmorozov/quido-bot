exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("please mention a valid member of this server.");
    if(!member.kickable) 
      return message.channel.send(`Sorry ${message.author}, you cannot mute this user.`);
    
    let reason = args.splice(2).join(" ")

    if(!reason) reason = "No reason provided";

    let time = args[1];

    if(!time) 
      return message.reply(`please, provide a duration of the mute.`);
    
    if(time < 1)
      return message.reply(`please, provide a valid duration of the mute.`);

    if(isNaN(time))
      return message.reply(`please, provide a duration of the mute.`);
  
    // This is the role you want to assign to the user
    let mutedRole = message.guild.roles.find(role => role.name == "Muted");

    // Mute the user
    member.addRole(mutedRole);
    if(time > 1)
      message.channel.send(`${member.user.tag} has been muted by ${message.author.tag} for a duration of ${time} minutes for: ${reason}`);
    if(time < 2)
      message.channel.send(`${member.user.tag} has been muted by ${message.author.tag} for a duration of ${time} minute for: ${reason}`);

    // Unmute them after x minutes
    setTimeout(() => {
      member.removeRole(mutedRole, `Temporary mute expired.`);
    }, time * 60000);
};