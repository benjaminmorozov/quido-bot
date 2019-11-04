exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Administrator", "Moderator","Head Admin","Admin"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let reason = args.join(" ").slice(22);
    let member = message.mentions.members.first();
    if(!member)
        return message.reply("please mention a valid member of this server.");
    if(!member.bannable) 
        return message.channel.send(`Sorry ${message.author}, you cannot kick this user.`);
    
    if(!reason) reason = "No reason provided.";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
        .catch(error => message.channel.send(`Sorry ${message.author}, I couldn't kick because of : ${error}`));
    message.channel.send(`${member.user.tag} was kicked by ${message.author.tag} for: ${reason}`);
};