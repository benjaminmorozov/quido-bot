const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let reason = args.join(" ").slice(22);
    let member = message.mentions.members.first();
    if(!member)
        return message.reply("please mention a valid member of this server.");

    if(!reason) reason = "No reason provided.";

    if(!warns[member.id]) warns[member.id] = {
        warns: 0
    };

    let OwnerRole = message.guild.roles.find("name", "🔱OWNER🔱");
    let DiscordManagerRole = message.guild.roles.find("name", "Discord Manager & Designer");
    if (message.member.roles.has(OwnerRole.id) || message.member.roles.has(DiscordManagerRole.id)){
      let HelperRole = message.guild.roles.find("name", "Helper");
      let ModeratorRole = message.guild.roles.find("name", "Moderator");
      let AdminRole = message.guild.roles.find("name", "Admin");
      let MainAdminRole = message.guild.roles.find("name", "MainAdminRole");
      if(member.roles.has(HelperRole.id) || member.roles.has(ModeratorRole.id) || member.roles.has(AdminRole.id) || member.roles.has(MainAdminRole.id)){
        let warnchannel = client.channels.get(`630412977094524957`);
            warnchannel.send({embed: {
                color: 0xff5353,
                author: {
                  name: 'Staff Warning:',
                },
                fields: [{
                  name: "Warned User:",
                  value: `<@${member.id}>`,
                  inline: "true"
                  },
                  {
                    name: "Warned In:",
                    value: `${message.channel}`,
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
        } else if(member && !member.roles.has(HelperRole.id) || !member.roles.has(ModeratorRole.id) || !member.roles.has(AdminRole.id) || !member.roles.has(MainAdminRole.id)){
          let warnchannel = client.channels.get(`630412977094524957`);
              warnchannel.send({embed: {
                  color: 0xff5353,
                  author: {
                    name: 'Staff Warning:',
                  },
                  fields: [{
                    name: "Warned User:",
                    value: `<@${member.id}>`,
                    inline: "true"
                    },
                    {
                      name: "Warned In:",
                      value: `${message.channel}`,
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
          };
      };

    if(warns[member.id].warns == 3){
        let muterole = message.guild.roles.find(role => role.name == "Muted");

        let mutetime = "10m";
        await(member.addRole(muterole));
        warnchannel.send(`<@${member.id}> has been temporarily muted`);

        setTimeout(function(){
          member.removeRole(muterole)
          warnchannel.send(`<@${member.id}> has been unmuted.`)
        }, ms(mutetime))
    };
    if(warns[member.id].warns == 5){
      let muterole = message.guild.roles.find(role => role.name == "Muted");

      let mutetime = "30m";
      await(member.addRole(muterole));
      warnchannel.send(`<@${member.id}> has been temporarily muted`);

      setTimeout(function(){
        member.removeRole(muterole)
        warnchannel.send(`<@${member.id}> has been unmuted.`)
      }, ms(mutetime))
    };
    if(warns[member.id].warns == 7){
      let muterole = message.guild.roles.find(role => role.name == "Muted");

      let mutetime = "60m";
      await(member.addRole(muterole));
      warnchannel.send(`<@${member.id}> has been temporarily muted`);

      setTimeout(function(){
        member.removeRole(muterole)
        warnchannel.send(`<@${member.id}> has been unmuted.`)
      }, ms(mutetime))
    };
    if(warns[member.id].warns == 10){
      let muterole = message.guild.roles.find(role => role.name == "Muted");

      let mutetime = "120m";
      await(member.addRole(muterole));
      warnchannel.send(`<@${member.id}> has been temporarily muted`);

      setTimeout(function(){
        member.removeRole(muterole)
        warnchannel.send(`<@${member.id}> has been unmuted.`)
      }, ms(mutetime))
    };
};
