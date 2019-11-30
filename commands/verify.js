const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let reason = args.join(" ");
  const member = message.author;
  if(message.guild === null) {
    if(reason === code) {
      const verifyEmbed = new Discord.RichEmbed()
        .setColor('#00D166')
        .setTitle('Verified!')
        .setDescription(`Thanks for verifying. Have a nice experience!`)
        .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
      member.send(verifyEmbed);
      let verifiedRole = client.guilds.get("610434388777369602").roles.find(role => role.id == "613347276647039016");
      client.guilds.get("610434388777369602").message.member.addRole(verifiedRole);
    } else {
      let invite = await client.guilds.get("610434388777369602").channels.find('id', '646418925986250762').createInvite({
          maxAge: 0, //maximum time for the invite, in milliseconds
          maxUses: 1 //maximum times it can be used
        }).catch(console.log);
      const verifyEmbed = new Discord.RichEmbed()
        .setColor('#FF470F')
        .setTitle('Wrong Verification Code!')
        .setDescription(`Please, retry the verification process by rejoining the server using this invite: ${invite}`)
        .addField('**Correct Code:**', `hm ${code}`, false)
        .addField('**Input:**', `hm ${reason}`, false)
        .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
      member.send(verifyEmbed);
      client.guilds.get("610434388777369602").member.kick('Sent a wrong verification code.')
    };
  } else {
    return;
  };
};
