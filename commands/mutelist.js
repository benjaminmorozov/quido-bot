exports.run = async (client, message) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("you don't have enough permissions to execute this command!");
    
    message.channel.send({embed: {
        color: 0xff5353,
        title: 'All muted members on this server:',
        description: `**> ${message.guild.roles.get('630146706930925569').members.map(m=>m.user.tag).join('\n')}**`,
        footer: {
          icon_url: `${client.user.avatarURL}`,
          text: "Thanks for being a part of our community ❤️"
        }
      }
    });
};
