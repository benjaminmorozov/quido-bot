exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator","Head Moderator","Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    var filter = m => m.author.id === message.author.id;
    message.channel.send(`🎉 Nice, so we're going to make a giveaway! In what channel?`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        var step = collected.first().content;
        let step1 = step.replace('#', '');
        let step2 = step1.replace('#', '<');
        let channel = step2.replace('#', '>');
        message.channel.send(channel)
        let room = client.channels.find('id', channel);
        if(!room) return message.channel.send(':disappointed_relieved: I could not find that channel');
      });
    });
};
