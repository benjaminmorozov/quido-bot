const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@quido-bot-sku03.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
const Warns = require("../models/warns.js")
const ms = require("ms");

exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator","Head Moderator","Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("you don't have enough permissions to execute this command!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let reason = args.join(" ").slice(22);
    let member = message.mentions.members.first();
    if(!member)
        return message.reply("please mention a valid member of this server.");

    if(!reason) reason = "No reason provided.";

    let warnstoadd = 1;
    Warns.findOne({userID: member.id, serverID: message.guild.id}, (err, score) => {
      if(err) console.log(err);
      if(!warns){
        const newWarns = new Warns({
          userID: message.author.id,
          serverID: message.guild.id,
          reason: reason,
          warns: warnstoadd
        });

        newWarns.save().catch(err => console.log(err));
      } else {
        warns.warns = warns.warns + warnstoadd;
        warns.save().catch(err => consolelog(err));
      }
    });

    let OwnerRole = message.guild.roles.find("name", "🔱OWNER🔱");
    let DiscordManagerRole = message.guild.roles.find("name", "Discord Manager & Designer");
    if (message.member.roles.has(OwnerRole.id) || message.member.roles.has(DiscordManagerRole.id)){
      let HelperRole = message.guild.roles.find("name", "Helper");
      let ModeratorRole = message.guild.roles.find("name", "Moderator");
      let AdminRole = message.guild.roles.find("name", "Admin");
      let Member = message.guild.roles.find("name", "Member");
      if(member.roles.has(HelperRole.id) || member.roles.has(ModeratorRole.id) || member.roles.has(AdminRole.id)){
        let warnchannel = client.channels.get(`630412977094524957`);
            warnchannel.send({embed: {
                color: 0xff5353,
                author: {
                  name: 'Staff Warning:',
                },
                fields: [{
                  name: "Warned Member:",
                  value: `${member}`,
                  inline: "true"
                  },
                  {
                    name: "Warned By:",
                    value: `${message.author}`,
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
                  },
                  {
                    name: "Warnings:",
                    value: `${warns.warns}`,
                    inline: "true"
                  }
                ],
                footer: {
                  icon_url: `${client.user.avatarURL}`,
                  text: "If you find a bug, please report it to our staff. ❤️"
                }
              }
            });
        } else if(member.roles.has(Member.id)){
          let warnchannel = client.channels.get(`630403969616707594`);
              warnchannel.send({embed: {
                  color: 0xff5353,
                  author: {
                    name: 'Warning:',
                  },
                  fields: [{
                    name: "Warned Member:",
                    value: `${member}`,
                    inline: "true"
                    },
                    {
                      name: "Warned By:",
                      value: `${message.author}`,
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
                    },
                    {
                      name: "Warnings:",
                      value: `${warns.warns}`,
                      inline: "true"
                    }
                  ],
                  footer: {
                    icon_url: `${client.user.avatarURL}`,
                    text: "If you find a bug, please report it to our staff. ❤️"
                  }
                }
              });
          };
      } else {
        let warnchannel = client.channels.get(`630403969616707594`);
            warnchannel.send({embed: {
                color: 0xff5353,
                author: {
                  name: 'Warning:',
                },
                fields: [{
                  name: "Warned Member:",
                  value: `${member}`,
                  inline: "true"
                  },
                  {
                    name: "Warned By:",
                    value: `${message.author}`,
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
                  },
                  {
                    name: "Warnings:",
                    value: `${warns.warns}`,
                    inline: "true"
                  }
                ],
                footer: {
                  icon_url: `${client.user.avatarURL}`,
                  text: "If you find a bug, please report it to our staff. ❤️"
                }
              }
            });
      };
};
