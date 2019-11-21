exports.run = (client, message, args) => {
  if(message.author.id === '631205812005634058') {
    let guild = client.guilds.get('610434388777369602'), // returns a Guild or undefined
    channel;

    if (guild) {
      chat = guild.channels.get('646998136950226945');
      message.channel.type === dm;
      let botmessage = collected.first().content;
      chat.send(botmessage);
    };
  };
};
