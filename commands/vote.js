exports.run = async (client, message, args) => {
    let reason = args.join(" ");
    if(!reason) {
      return message.reply("you must have something to vote for!");
    } else {
      if (!message.content.includes("?")) return message.reply("a vote must have an exclamation mark!");
    };

    message.delete();
    const pollTopic = await message.channel.send(reason);
    await pollTopic.react(`✅`);
    await pollTopic.react(`⛔`);
};
