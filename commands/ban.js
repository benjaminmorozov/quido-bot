exports.run = async (client, message, args) => {
                                   //owner                blade                designer             main admin           admin
  if(!message.member.roles.some(r=>['610704273822711820','627253814717710370','622715668659437568','631922921475932170','616501517058310184'].includes(r.id)))
    return message.reply("you don't have enough permissions to execute this command!");

  let reason = args.join(" ").slice(22);
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("mention a valid member of this server.")

  if(!reason) reason = "No reason provided.";

  if(message.member.roles.some(r=>['630151131841953792'].includes(r.id))){
    await member.ban(reason)
      .catch(error => message.channel.send(`Sorry ${message.author}, I couldn't ban ${member.user} because of : ${error}`));
    message.channel.send(`${member.user} has been banned by ${message.author} because: ${reason}`);
  } else {
    if(member.roles.has('613347276647039016')) {
      await member.ban(reason)
        .catch(error => message.channel.send(`Sorry ${message.author}, I couldn't ban ${member.user} because of : ${error}`));
      message.channel.send(`${member.user} has been banned by ${message.author} because: ${reason}`);
    } else {
        return message.reply('you cannot ban this member.');
    };
  };
};
