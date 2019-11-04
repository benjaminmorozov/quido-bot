exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
        return message.reply("please mention a valid member of this server.");
    if(!member.kickable) 
        return message.channel.send(`Sorry ${message.author}, you cannot unmute this user.`);

    if(!member.roles.find(r => r.name === "Muted"))
        return message.reply("this user is not muted.");

    // This is the role you want to assign to the user
    let mutedRole = message.guild.roles.find(role => role.name == "Muted");

    member.removeRole(mutedRole)
    .catch(error => console.log(`Sorry ${message.author}, I couldn't unmute because of : ${error}`));
    message.channel.send(`${member.user.tag} was unmuted by ${message.author.tag}`);
};