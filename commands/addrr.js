exports.run = async (client, message, args) => {
    const reactions = await message.awaitReactions(reaction => {
        return reaction.emoji.name === ":minecraft:630379820030885898"; 
    }, {time: 7000});
    console.log(reactions);
};