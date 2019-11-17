exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator","Head Admin","Admin","Head Moderator","Moderator"].includes(r.name)) )
    return message.reply("you don't have enough permissions to execute this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let reason = args.join(" ").slice(22);
    let member = message.mentions.members.first();
    if(!member)
        return message.reply("please mention a valid member of this server.");
    if(!member.kickable)
        return message.channel.send(`Sorry ${message.author}, you cannot kick this member.`);

    if(!reason) reason = "No reason provided.";

    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
        .catch(error => message.channel.send(`Sorry ${message.author}, I couldn't kick because of : ${error}`));
    message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} for: ${reason}`);
};
