exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let reason = args.join(" ").slice(22);
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
        return message.reply("please mention a valid member of this server.");
    if(!member.kickable) 
        return message.channel.send(`Sorry ${message.author}, you cannot mute this user.`);

    if(!reason) reason = "No reason provided.";

    if(member.roles.find(r => r.name === "Muted"))
        return message.reply("this user is already muted.");

    let HelperRole = message.guild.roles.find("name", "Helper");
    let ModeratorRole = message.guild.roles.find("name", "Moderator");
    if (message.member.roles.has(HelperRole.id) || message.member.roles.has(ModeratorRole.id)) {
        // Mute the user
        let mutedRole = message.guild.roles.find(role => role.name == "Muted");
        member.addRole(mutedRole);
        message.channel.send(`${message.author.tag}, it seems like you're trying to mute a member of the staff. Therefore, I'm automatically muting him only for a duration of 10 minutes`);
        message.channel.send(`${member.user.tag} has been muted by ${message.author.tag} for a duration of 10 minutes for: ${reason}`);
        setTimeout(() => {
            member.removeRole(mutedRole, `Temporary mute expired.`);
        }, 10 * 60000);
    } else {
        // This is the role you want to assign to the user
        let mutedRole = message.guild.roles.find(role => role.name == "Muted");

        member.addRole(mutedRole)
        .catch(error => console.log(`Sorry ${message.author}, I couldn't mute because of : ${error}`));
        message.channel.send(`${member.user.tag} has been muted by ${message.author.tag} for: ${reason}`);
    }
};