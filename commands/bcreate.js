exports.run = (client, message, args) => {
  /**
 * @param {object} [Guild] - The discord server you want to backup
 */
 const backup = require("discord-backup");
 backup.create(Guild).then((backupID) => {
     console.log(backupID); // NSJH2
 });
};
