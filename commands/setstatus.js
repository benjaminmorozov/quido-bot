exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Administrator", "Moderator","Head Admin","Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    const activity = args.join(" ");
    client.user.setActivity(activity);
    message.channel.send(`My activity was set to "${activity}".`).then(sentMessage => {
      sentMessage.delete(5000);
    });
};