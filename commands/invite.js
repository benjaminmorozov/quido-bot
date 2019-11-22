exports.run = async (client, message, args) => {
  let invite = await message.channel.createInvite({
      maxAge: 10 * 60 * 1000 //maximum time for the invite, in milliseconds
      maxUses: 1 //maximum times it can be used
    }, `Requested with command by ${message.author.tag}`).catch(console.log);
  message.reply(invite ? `Created a new one-use invite: ${invite}` : "There has been an error during the creation of the invite.");
};
