exports.run = (client, message, args, code, member) => {
  if(args === code) {
  const verifyEmbed = new Discord.RichEmbed()
    .setColor('#00D166')
    .setTitle('Verified!')
    .setDescription(`Thanks for verifying. Have a nice experience!`)
    .setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);
  member.send(verifyEmbed);
  let verifiedRole = message.guild.roles.find(role => role.id == "613347276647039016");
  client.guilds.get("610434388777369602").member.roles.add(verifiedRole)
} else {
  member.send('fuck');
}
};
