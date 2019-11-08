exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    if (!args.length) {
        return;
    }

    const quidobot = "quido bot";
    const quidobot1 = "Quido bot";
    const quidobot2 = "bot quido";
    const quidobot3 = "Bot quido";
    const quidobot4 = "quido Bot";
    const quidobot5 = "Quido Bot";
    const quidobot6 = "bot Quido";
    const quidobot7 = "Bot Quido";
    if(message.content.includes(quidobot) || message.content.includes(quidobot1)) || message.content.includes(quidobot2)) || message.content.includes(quidobot3)) || message.content.includes(quidobot4)) || message.content.includes(quidobot5)) || message.content.includes(quidobot6)) || message.content.includes(quidobot7)) {
      return message.reply("well well... We do not say that here.")
    };

    message.delete();
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
};
