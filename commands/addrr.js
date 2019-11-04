const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o=>{});

    const a = message.guild.roles.get('630436740854841357'); // Minecraft role
    const b = message.guild.roles.get('630436083129385002'); // Counter-Strike role

    const filter = (reaction, user) => ['A','B'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new RichEmbed()
        .setTitle('REACH EMOJI TO GET ROLE')
        .setDescription(`
        
        A
        B
        
        `)
        .setColor(0xff5353)
        .setFooter(`ID: ${message.author.id}`); 
    message.channel.send(embed);
};