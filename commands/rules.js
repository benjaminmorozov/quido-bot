const Discord = require("discord.js");
exports.run = (client, message) => {
  const rules = `Discord Terms of Service may also apply:\nhttps://pastebin.com/8VT2HTqD\n**Server Rules:**\n1. Try to reduce the usage of cursing and the N word.\n\n2. Please, use the correct language in every channel.\n\n3. Post NSFW messages ONLY into the #nsfw channel.\n\n4. Send videos ONLY into the media channel.\n\n5. Do NOT post offers in any of the chatting channels.\n\n6. Do NOT promote any Discord server/website/forum here without the permission of the @🔱OWNER🔱.\n\n7. Try to reduce the use of caps.\n\n8. Do NOT spam.\n\n9. Do NOT invite staff to Discord servers.\n\n10. Do NOT scam (If you have any proofs of scaming, report them here).\n\n11. Usage of multiple accounts on this server is NOT allowed and will result in a kick of the second (nonmain) account.\n\n12. Usage of more accounts while having an ongoing mute/kick/ban is prohibited.\n\n13. If you stumble upon a scammer, please report him to our staff with a proof. He'll be added to the #scam channel for others to prevent getting scammed.\n\n14. You may tag general roles (including 'here') only 3 times a day.\n\n15. Do NOT disrespect the staff.\n\n16. Rules do NOT apply to the staff in the same way as they do to the members. Nevertheless, they shall try to be a good example to them.\n\n17. Do NOT advertise anything here without the permission of the @🔱OWNER🔱.\n\n\nViolation of any of these rules will result in a mute or a ban.\n**Note:** We are not associated with any distribution of hacking, cheating, nor pirated software - although you may find videos of video games by the members of the server, where they're being used. These serve solely for education purposes and we do not support any sign of trying to sell, or distribute them by any sent media on the server.\nThanks for being a part of our community ❤️ - The Quido's Club staff\n\nIf you experience any difficulties or need some help on the server, contact a member of the staff.`;
  const baseEmbed = new Discord.RichEmbed()
  	.setColor('0xff5353')
  	.addField('**Server Rules**', rules, false)
  	.setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);

  message.channel.send(baseEmbed);
};
