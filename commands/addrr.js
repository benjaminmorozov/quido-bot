exports.run = async (client, message, args) => {
    const reactions = await message.awaitReactions(reaction => {
        return reaction.emoji.name === "😂"; 
    }, {time: 7000});
    console.log(reactions);
};