const ms = require("ms");
const giveaways = require("discord-giveaway");
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator","Head Moderator","Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    giveaways.start(message.channel, {
        time: ms(args[0]),
        prize: args.slice(2).join(" "),
        winnersCount: parseInt(args[1])
    }).then((gData) => {
        console.log(gData); // {...} (messageid, end date and more)
    });
};
