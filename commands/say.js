exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator","Head Moderator","Moderator","Head Admin","Admin","Helper","12 yr old typecek"].includes(r.name)) )
    return message.reply("you don't have enough permissions to execute this command!");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    if (!args.length) {
        return;
    }
    const everyone = "@everyone";
    const here = "@here";
    if(message.member.roles.some(r=>["Head Moderator","Moderator","Helper","12 yr old typecek"].includes(r.name))) {
      if(message.content.toLowerCase().includes(everyone) || message.content.toLowerCase().includes(here)) {
        return message.reply("you're not allowed to mention these roles");
      };
    };

    const quidobot = "quido bot";
    const quidobott = "bot quido";
    if(message.content.toLowerCase().includes(quidobot) || message.content.toLowerCase().includes(quidobott)) {
      message.delete();
      return message.reply("well well... We do not say that here.")
    };

    message.delete();
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
};
