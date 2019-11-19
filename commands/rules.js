const Discord = require("discord.js");
exports.run = (client, message) => {
  const baseEmbed = new Discord.RichEmbed()
  	.setColor('0xff5353')
  	.addField('**Server Rules**', 'Discord Terms of Service may also apply:
```https://pastebin.com/8VT2HTqD```
**Server Rules:**
1. Try to reduce the usage of cursing and the N word.

2. Please, use the correct language in every channel.

3. Post NSFW messages ONLY into the #nsfw channel.

4. Send videos ONLY into the media channel.

5. Do NOT post offers in any of the chatting channels.

6. Do NOT promote any Discord server/website/forum here without the permission of the @🔱OWNER🔱.

7. Try to reduce the use of caps.

8. Do NOT spam.

9. Do NOT invite staff to Discord servers.

10. Do NOT scam (If you have any proofs of scaming, report them here).

11. Usage of multiple accounts on this server is NOT allowed and will result in a kick of the second (nonmain) account.

12. Usage of more accounts while having an ongoing mute/kick/ban is prohibited.

13. If you stumble upon a scammer, please report him to our staff with a proof. He'll be added to the #scam channel for others to prevent getting scammed.

14. You may tag general roles (including 'here') only 3 times a day.

15. Do NOT disrespect the staff.

16. Rules do NOT apply to the staff in the same way as they do to the members. Nevertheless, they shall try to be a good example to them.

17. Do NOT advertise anything here without the permission of the @🔱OWNER🔱.


Violation of any of these rules will result in a mute or a ban.
**Note:** We are not associated with any distribution of hacking, cheating, nor pirated software - although you may find videos of video games by the members of the server, where they're being used. These serve solely for education purposes and we do not support any sign of trying to sell, or distribute them by any sent media on the server.
Thanks for being a part of our community ❤️ - The Quido's Club staff

If you experience any difficulties or need some help on the server, contact a member of the staff.', false)
  	.setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);

  message.channel.send(baseEmbed);
};
