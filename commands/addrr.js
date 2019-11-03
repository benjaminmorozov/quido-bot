exports.run = async (client, message, args) => {

    let.message = await message.channel.send("test");
    await msg.react("😦");
    await msg.react("🍆");

    const reactions = await message.awaitReactions(reaction => {
        return reaction.emoji.name === "😂"; 
    }, {time: 7000});
    console.log(reactions);
};