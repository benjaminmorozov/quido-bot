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
        let channel = step.replace('#', '');
        let room = message.guild.channels.find('name' , channel);
        if(!room) return message.channel.send(':disappointed_relieved: I could not find that channel');
      });
    });
};
