const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Administrator", "Moderator","Head Admin","Admin"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let reason = args.join(" ").slice(22);
    let member = message.mentions.members.first();
    if(!member)
        return message.reply("please mention a valid member of this server.");
    if(!member.kickable) 
        return message.channel.send(`Sorry ${message.author}, you cannot kick this user.`);
    
    if(!reason) reason = "No reason provided.";

    if(!warns[member.id]) warns[member.id] = {
        warns: 0
    };

    warns[member.id].warns++;
    
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });
  
    let warnchannel = message.guild.channels.find(channel => "logs");

    message.channel.send({embed: {
        color: 0xff5353,
        author: {
          name: 'Warning',
        },
        fields: [{
          name: "Warned User:",
          value: `<@${member.id}>`,
          inline: "true"
          },
          {
            name: "Warned In:",
            value: `${warns[member.id].warns}`,
            inline: "true"
          },
          {
            name: "Number of Warnings:",
            value: `${warns[member.id].warns}`,
            inline: "true"
          },
          {
            name: "Reason:",
            value: `${reason}`,
            inline: "true"
          }
        ],
        footer: {
          icon_url: 'https://images.discordapp.net/avatars/220644154177355777/bd6b28005c26d079486063a4976dfb44.png',
          text: "If you find a bug, please report it to our staff. ❤️"
        }
      }
    });

    if(warns[member.id].warns == 2){
        let muterole = message.guild.roles.find(`name`, "muted");
        if(!muterole) return message.reply("You should create that role dude.");
    
        let mutetime = "10s";
        await(member.addRole(muterole.id));
        message.channel.send(`<@${member.id}> has been temporarily muted`);
    
        setTimeout(function(){
          member.removeRole(muterole.id)
          message.reply(`<@${member.id}> has been unmuted.`)
        }, ms(mutetime))
    };
    if(warns[member.id].warns == 3){
        message.guild.member(member).ban(reason);
        message.reply(`<@${member.id}> has been banned.`)
    }
};