exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    const activity = args.join(" ");
    client.user.setActivity(activity);
    message.channel.send(`My activity has been set to "${activity}".`).then(sentMessage => {
      sentMessage.delete(5000);
    });
};
