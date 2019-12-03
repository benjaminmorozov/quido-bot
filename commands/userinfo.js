const Discord = require("discord.js");
const moment = require("moment");
exports.run = (client, message, args) => {
    const member = message.mentions.users.first() || message.author;
    var avatar = member.avatarURL;
    if(avatar == null) avatar = "https://i.pinimg.com/originals/b8/5d/0b/b85d0b60c0283fe7fd3f34cd0df87f15.png";
    message.channel.send(`${member.avatarURL}`)
    const userinfoEmbed= new Discord.RichEmbed()
      .setColor('0xff5353')
      .setAuthor(`${member.username}`)
      .setThumbnail(`${avatar}`)
      .addField('**Full Username:**', `${member.username}#${member.discriminator}`, false)
      .addField('**Member ID:**', `${member.id}`, false)
      .addField('**Account Creation Date:**', `${moment.utc(member.createdAt).format('dddd DD/MM/YYYY')}`, false)
      .addField('**Member Join Date:**', `${moment.utc(member.JoinedAt).format('dddd DD/MM/YYYY')}`, false)
      .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
    message.channel.send(userinfoEmbed);
};
