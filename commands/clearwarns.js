const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
var editJsonFile = require("edit-json-file");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Administrator", "Moderator","Head Admin","Admin"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first();
    if(!member)
        return message.reply("please mention a valid member of this server.");
    
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });
  
    let warnchannel = client.channels.get(`630403969616707594`);
    
    var file = editJsonFile(`./warnings.json`); //load queue.json

    fs.writeFileSync(`./warnings.json`, '{\n    \n}'); //reset queue.json

    file = editJsonFile(`./warnings.json`); //reload the file <---- this is the most important one

    file.set(`${member.id}`, "0"); //set your new variables
};