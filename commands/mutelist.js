exports.run = async (client, message) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this command!");
    
    message.channel.send({embed: {
        color: 0xff5353,
        title: 'All muted users:',
        description: `**> ${message.guild.roles.get('630146706930925569').members.map(m=>m.user.tag).join('\n')}**`,
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp',
          text: "Thanks for being a part of our community ❤️"
        }
      }
    });
};
