exports.run = (client, message, args) => {
    var emojiname = ["minecraft"];
    var rolename=["Minecraft"];

    for(let n in emojiname){
        var emoji =[messsage.guild.emojis.find(r => r.name == emojiname[n])];
        for(let i in emoji){
            message.react(emoji[i]);
        }
    }

    client.on("messageReactionAdd",(reaction,user)=>{
        if(!user) return;
        if(user.bot)return;
        if(!reaction.message.channel.guild) return;
        for(let n in emojiname){
            if(reaction.emoji.name == emojiname[n]){
                let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);          
                reaction.message.guild.member(user).addRole(role).catch(console.error);
            }
        }
    });
      
      
    client.on("messageReactionRemove",(reaction,user)=>{
        if(!user) return;
        if(user.bot)return;
        if(!reaction.message.channel.guild) return;
        for(let n in emojiname){
            if(reaction.emoji.name == emojiname[n]){
                let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);   
                reaction.message.guild.member(user).removeRole(role).catch(console.error);
            }
        }
    });
};