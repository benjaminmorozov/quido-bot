const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator","Head Moderator","Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("you don't have enough permissions to execute this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let reason = args.join(" ").slice(22);
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
        return message.reply("please mention a valid member of this server.");

    if(!reason) reason = "No reason provided.";

    if(member.roles.find(r => r.name === "Muted"))
        return message.reply("this user is already muted.");

    let OwnerRole = message.guild.roles.find("name", "🔱OWNER🔱");
    let DiscordManagerRole = message.guild.roles.find("name", "Discord Manager & Designer");
    if (message.member.roles.has(OwnerRole.id) || message.member.roles.has(DiscordManagerRole.id)) {
        // Mute the user
        let mutedRole = message.guild.roles.find(role => role.name == "Muted");
        member.addRole(mutedRole);
        var log = message.guild.channels.find('id', '617351547130478621');
        if (log != null) {
          const baseEmbed = new Discord.RichEmbed()
            .setColor('#45b6fe')
            .setAuthor(`[MUTE] ${member.username}#${member.discriminator}`, member.avatarURL)
            .setTitle(`Message edited in #${newMessage.channel.name}`)
            .addField('Member:', `${member}`, true)
            .addField('Muted by:', `${message.author}`, true)
            .addField('Reason:', `${reason}`, true)
            log.send(baseEmbed);
          message.channel.send(baseEmbed);
    } else {
        if(!member.kickable)
            return message.channel.send(`Sorry ${message.author}, you cannot mute this user.`);
        // This is the role you want to assign to the user
        let mutedRole = message.guild.roles.find(role => role.name == "Muted");

        member.addRole(mutedRole)
        .catch(error => console.log(`Sorry ${message.author}, I couldn't mute because of : ${error}`));
        var log = message.guild.channels.find('id', '617351547130478621');
        if (log != null) {
          const baseEmbed = new Discord.RichEmbed()
            .setColor('#45b6fe')
            .setAuthor(`[MUTE] ${member.username}#${member.discriminator}`, member.avatarURL)
            .setTitle(`Message edited in #${newMessage.channel.name}`)
            .addField('Member:', `${member}`, true)
            .addField('Muted by:', `${message.author}`, true)
            .addField('Reason:', `${reason}`, true)
            log.send(baseEmbed);
          message.channel.send(baseEmbed);
        }
    }
};
