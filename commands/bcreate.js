const backup = require("discord-backup");
exports.run = async (client, message, args, backup) => {
  /**
 * @param {object} [Guild] - The discord server you want to backup
 */
 backup.setStorageFolder(__dirname+"/backups/");
 await backup.create(Guild).then((backupID) => {
   const backupEmbed = new Discord.RichEmbed()
   	.setColor('0xff5353')
   	.setTitle('⚠️ Backup:')
   	.setThumbnail(`${client.user.avatarURL}`)
    .setDescription(`Created a new backup for ${guild.name}.`)
   	.addField('Backup ID:', backupID, false)
   	.setFooter('Thanks for being a part of our community. ❤️', `${client.user.avatarURL}`);

   message.channel.send(backupEmbed);
 });
};
