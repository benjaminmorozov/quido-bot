exports.run = (client, message, args) => {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    if (!args.length) {
        return;
    }
    message.reply("ban pirex");
    message.guild.channels.find("id" , "640190361012011008").send(args);
};
