const Discord = require("discord.js");
const moment = require("moment");
exports.run = (client, message, args) => {
    const member = message.mentions.users.first() || message.author;
	let d = moment(member.createdAt);
			var OneDay = new Date().getTime() + (7 * 1 * 24 * 60 * 60 * 1000)
	function creationDate() {
										 // week day hour min  sec  msec
		if (OneDay > d) return `**⚠️ ${moment.utc(member.createdAt).format('dddd DD/MM/YYYY')} ⚠**`; // danger if age less than 1 month
		return moment.utc(member.createdAt).format('dddd DD/MM/YYYY');  // Looks good!
	}
    var avatar = member.avatarURL;
    if(avatar == null) avatar = "https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png";
    const userinfoEmbed= new Discord.RichEmbed()
      .setColor('0x0092ca')
      .setAuthor(member.username)
      .setThumbnail(member.displayAvatarURL)
      .addField('**Full Username:**', member.username + `#` + member.discriminator, false)
      .addField('**Member ID:**', member.id, false)
      .addField('**Account Creation Date:**', `${creationDate()} (${d} + ${OneDay})`, false)
      .addField('**Member Join Date:**', `${moment.utc(message.guild.member(member).joinedAt).format('dddd DD/MM/YYYY')}`, false)
      .setFooter('Thanks for being a part of our community. ❤️', message.guild.iconURL);
    message.channel.send(userinfoEmbed);
};
