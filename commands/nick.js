exports.run = (client, message, args) => {
    const taggedUser = message.mentions.users.first() || message.author;
    let nick = args.join(" ").slice(22);
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) || taggedUser === message.mentions.users.first())
    return message.reply("sorry, you don't have enough permissions to use this!");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    if (!args.length) {
        return;
    }

    if(message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) || taggedUser === message.mentions.users.first())
    message.guild.members.get(taggedUser.id).setNickname(nick);

    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) || taggedUser === message.author)
    message.author.setNickname(nick);
};
