const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const minecraftemoji = client.emojis.get("630379820030885898");
    const counterstrikeemoji = client.emojis.get("630379893422555147");

    await message.delete().catch(O_o=>{});

    const a = message.guild.roles.get('630436740854841357'); // Minecraft role
    const b = message.guild.roles.get('630436083129385002'); // Counter-Strike role

    const filter = (reaction, user) => ['A','B'].includes(reaction.emoji.name) && user.id === message.author.id;

    message.channel.send({embed: {
        color: 0xff5353,
        author: {
          name: `${minecraftemoji}`,
        },
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp',
          text: "Thanks for being a part of our community ❤️"
        }
      }
    });
};