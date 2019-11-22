exports.run = async (client, message, args) => {
  let use = 0;
  if(!args)
    return message.reply('please, define a number of times the invite can be used (ex. 1, 16, unlimited).');
  if(args === '1' || args > 1) {
    let use = args;
  } else if(args === 'unlimited') {
    let use = 0;
  } else {
    return message.reply('please, define a valid number.');
  }
  let invite = await message.channel.createInvite({
      maxAge: 0, //maximum time for the invite, in milliseconds
      maxUses: use //maximum times it can be used
    }, `Requested with command by ${message.author.tag}`).catch(console.log);
  message.reply(invite ? `created a new one-use invite for you: ${invite}` : "There has been an error during the creation of the invite.");
};
