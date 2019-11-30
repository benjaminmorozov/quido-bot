const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let allowedRole = message.guild.roles.find("name", "Member");
  if (message.member.roles.has(member.id)
    return message.author.reply('you are already verified!')
  let reason = args.join(" ");
  if(!reason) reason = "none";
  const member = verifymember;
  if(message.guild === null) {
    let guild = client.guilds.get("610434388777369602");
    var log = guild.channels.find('id', '617351547130478621');
    if(reason === code) {
      const verifyEmbed = new Discord.RichEmbed()
        .setColor('#00D166')
        .setTitle('Verified!')
        .setDescription(`Thanks for verifying. Have a nice experience!`)
        .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
      member.send(verifyEmbed);
      member.addRole('613347276647039016');
      const verificationcompletedEmbed = new Discord.RichEmbed()
        .setColor('#7289DA')
        .setTitle('Captcha Completed')
        .addField('**Sent To:**', `${member.user.username}#${member.user.discriminator}`, true)
        .addField('**Code:**', code, true)
        .setTimestamp()
        .setFooter(`Member: ${member.id}`);
      log.send(verificationcompletedEmbed);
    } else {
      let invite = await guild.channels.find('id', '646418925986250762').createInvite({
          maxAge: 0, //maximum time for the invite, in milliseconds
          maxUses: 1 //maximum times it can be used
        }).catch(console.log);
      const verifyEmbed = new Discord.RichEmbed()
        .setColor('#FF470F')
        .setTitle('Wrong Verification Code!')
        .setDescription(`Please, retry the verification process by rejoining the server using this invite: ${invite}`)
        .addField('**Correct Code:**', `${code}`, false)
        .addField('**Input:**', `${reason}`, false)
        .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
      member.send(verifyEmbed);
      const verificationfailedEmbed = new Discord.RichEmbed()
        .setColor('#FF470F')
        .setTitle('Captcha Failed')
        .addField('**Sent To:**', `${member.user.username}#${member.user.discriminator}`, true)
        .addField('**Requested Code:**', code, true)
        .addField('**Input:**', reason, true)
        .setTimestamp()
        .setFooter(`Member: ${member.id}`);
      log.send(verificationfailedEmbed);
      member.kick('Sent a wrong verification code.')
    };
  } else {
    return;
  };
};
