exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    client.guilds.get(args.join(" ")).leave()
    return message.reply("takzvaná sabotáž xddd");
};
