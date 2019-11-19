exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator","Head Admin","Admin"].includes(r.name)) )
    return message.reply("you don't have enough permissions to execute this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let reason = args.join(" ").slice(22);
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("please mention a valid member of this server");

    if(!reason) reason = "No reason provided.";

    let MemberRole = message.guild.roles.find("name", "Member");
    let OPRole = message.guild.roles.find("name", "🔑");
    if(message.member.roles.has(OPRole.id)){
      await member.ban(reason)
        .catch(error => message.channel.send(`Sorry ${message.author}, I couldn't ban ${member.user} because of : ${error}`));
      message.channel.send(`${member.user} has been banned by ${message.author} because: ${reason}`);
    } else {
      if(user.roles.has(MemberRole.id)) {
        await member.ban(reason)
          .catch(error => message.channel.send(`Sorry ${message.author}, I couldn't ban ${member.user} because of : ${error}`));
        message.channel.send(`${member.user} has been banned by ${message.author} because: ${reason}`);
      } else {
        return message.channel.send(`Sorry ${message.author}, you cannot ban this member.`);
      };
    };
  };
};
