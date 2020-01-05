const Discord = require("discord.js");
const moment = require("moment");
exports.run = (client, message, args) => {
    const member = message.mentions.users.first() || message.author;
    var avatar = member.avatarURL;
    if(avatar == null) avatar = "https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png";
    const userinfoEmbed= new Discord.RichEmbed()
      .setColor('0x0092ca')
      .setAuthor(member.username)
      .setThumbnail(member.displayAvatarURL)
      .addField('**Full Username:**', member.username + `#` + member.discriminator, false)
      .addField('**Member ID:**', member.id, false)
      .addField('**Account Creation Date:**', `${moment.utc(member.createdAt).format('dddd DD/MM/YYYY')}`, false)
      .addField('**Member Join Date:**', `${guild.member(member).joinedAt.toUTCString().substr(0, 16)}`, false)
      .setFooter('Thanks for being a part of our community. ❤️', message.guild.iconURL);
    message.channel.send(userinfoEmbed);
};
