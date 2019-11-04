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
        title: 'REACH EMOJI TO GET ROLE:',
        },
        fields: [
            {
                name: `test`,
                value: `${minecraftemoji}\n${counterstrikeemoji}`,
            }
        ],
        footer: {
          icon_url: 'https://images.discordapp.net/avatars/220644154177355777/bd6b28005c26d079486063a4976dfb44.png',
          text: "If you find a bug, please report it to our staff. ❤️"
        }
      });
};