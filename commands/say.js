exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    if (!args.length) {
        return;
    }

    if(message.content.includes('quido bot 1')) {
      return message.reply("well well... We do not say that here.")
    };

    message.delete();
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
};
