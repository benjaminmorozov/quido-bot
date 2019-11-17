exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("you don't have enough permissions to execute this command!");

    let reason = args;
    if(!reason)
      return message.reply("you must have something to vote for!");

    message.delete();
    const pollTopic = await message.channel.send(reason);
    await pollTopic.react(`✅`);
    await pollTopic.react(`⛔`);
};
