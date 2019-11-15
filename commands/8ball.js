const Discord = require("discord.js");
exports.run = (client, message, args) => {
    function doMagic8BallVoodoo() {
        var rand = [':8ball: Absolutely.', ':8ball: Absolutely not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];
        return rand[Math.floor(Math.random()*rand.length)];
    };
    let reason = args.slice(1).join(' ');
    const questionmark = "?";
    if(!message.content.toLowerCase().includes(questionmark)) {
      return message.reply("ask a valid question.")
    }
    if(!reason) {
      return message.reply("ask a valid question.")
    } else {
      const baseEmbed = new Discord.RichEmbed()
        .setColor('0xff5353')
        .setDescription(doMagic8BallVoodoo())
        .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
      message.channel.send(baseEmbed);
    };
}
