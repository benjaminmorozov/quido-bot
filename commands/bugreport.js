const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!args.length) {
      return;
    }
    let reportmessage = args.join(" ");
    client.fetchUser("207044528027205634",false).then(user => {
      const bugreportEmbed = new Discord.RichEmbed()
      	.setColor('0xff5353')
      	.setTitle('BUG REPORT:')
      	.addField('**Sent By:**', `${message.author.username}#${message.author.discriminator}`, false)
      	.addField('**Sent In:**', `\'${client.guilds.get(message.author).name}\' - \'${message.channel}\'`, false)
      	.addField('**Message:**', `${reportmessage}`, false)
      	.setFooter(`Member ID: ${message.author.id}`);
      message.channel.send(bugreportEmbed);
    });
    message.reply("Thanks for submitting your bug report. It will be reviewed and the bug will be fixed in no time!");
};
