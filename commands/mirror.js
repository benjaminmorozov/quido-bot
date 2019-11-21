exports.run = (client, message, args) => {
  if(message.author.id === '631205812005634058') {
    let guild = client.guilds.get('610434388777369602'), // returns a Guild or undefined
    channel;

    if (guild) {
      chat = guild.channels.get('646998136950226945');
        let botmessage = args.join(" ");
        chat.send(botmessage);
    message.channel.type === dm;
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    }).then(collected => {
      var step = collected.first().content;
      let room = step.slice(2, -1);
    };
  };
};
};
