const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

function doMagic8BallVoodoo() {
  var rand = [':8ball: Absolutely.', ':8ball: Absolutely not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];

  return rand[Math.floor(Math.random()*rand.length)];
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`Quido je láska ❤️`);
});

client.on("message", async message => {
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "help") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: '12 Commands:',
        },
        thumbnail: {
            "url": "http://giphygifs.s3.amazonaws.com/media/MF1kR4YmC2Z20/giphy.gif"
          },
        fields: [{
          name: "Fun:",
          value: `__${config.prefix}cat__ - Get an instant picture of a cute cat. (usage: ${config.prefix}cat)\n__${config.prefix}dog__ - Get an instant picture of a cute dog. (usage: ${config.prefix}dog)\n__${config.prefix}8ball__ - Ask a question to the mystic 8ball. (usage: ${config.prefix}8ball <question>)`
          },
          {
            name: "Mod:",
            value: `__${config.prefix}ban__ - Bans an user. (usage: ${config.prefix}ban <@user> <reason>)\n__${config.prefix}kick__ - Kicks an user. (usage: ${config.prefix}kick <@user> <reason>)\n__${config.prefix}mute__ - Mutes an user. (usage: ${config.prefix}mute <@user> <reason>\n__${config.prefix}purge__ - Deletes a custom amount of messages. (usage: ${config.prefix}purge <amount>)\n__${config.prefix}unmute__ - Unmutes an user. (usage: ${config.prefix}unmute <@user>)`
          },
          {
            name: "Utils:",
            value: "$avatar - Displays an avatar of the mentioned user/you.\n$help - Show all the commands.\n$server - Informations about the server.\n$user-info - Displays informations about you.",
            inline: "true"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://images.discordapp.net/avatars/220644154177355777/bd6b28005c26d079486063a4976dfb44.png',
          text: "If you find a bug, please report it to our staff. ❤️"
        }
      }
    })
  }

  if(command === "server") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: 'Quido’s Club',
          icon_url: 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp'
        },
        thumbnail: {
            "url": "https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp"
          },
        description: "A Czech/English gaming Discord server for everyone.",
        fields: [{
            name: "Server Owner:",
            value: "<@529057345599307776>",
            inline: "true"
          },
          {
            name: "User Count:",
            value: `${message.guild.members.filter(member => !member.user.bot).size}`,
            inline: "true"
          },
          {
            name: "Staff List:",
            value: "<#638804758240559154>",
            inline: "true"
          },
          {
            name: "Creation Date:",
            value: `${message.channel.guild.createdAt.toUTCString().substr(0, 16)}`,
            inline: "true"
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp',
          text: "Thanks for being a part of our community ❤️"
        }
      }
    })
  }

  if(command === "user-info") {
    const taggedUser = message.mentions.users.first() || message.author;
    const userInfo = new Discord.RichEmbed()
    .setColor(0x333333)
    .setThumbnail(taggedUser.avatarURL)
    .setAuthor(taggedUser.username)
    .addField(`Full Username`,`${taggedUser.username}#${taggedUser.discriminator}`)
    .addField(`User ID`,`${taggedUser.id}`)
    message.channel.send(userInfo);
  }

  if(command === "avatar") {
    const taggedUser = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(`${taggedUser.username}#${taggedUser.discriminator}`)
        .setImage(taggedUser.avatarURL);
    message.channel.send(avatarEmbed);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Owner","Administrator", "Moderator","Head Admin","Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
  }

  if(command === "mute") {
    if(!message.member.roles.some(r=>["Owner","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
      return message.reply("Sorry, you don't have enough permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("you cannot mute this user!");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "no reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.setMute(true, reason)
      .catch(error => console.log(`Sorry ${message.author} I couldn't mute ${member.user.tag} because of : ${error}`));
    message.reply(`${member.user.tag} has been muted by ${message.author.tag} for: ${reason}`);
  }

  if(command === "unmute") {
    if(!message.member.roles.some(r=>["Owner","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
      return message.reply("Sorry, you don't have enough permissions to use this!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("please mention a valid member of this server.");
    if(!member.kickable) 
      return message.reply("you cannot unmute this user!");

    let reason = args.slice(1).join(' ');

    await member.setMute(false, reason)
      .catch(error => console.log(`Sorry ${message.author} I couldn't unmute ${member.user.tag} because of : ${error}`));
    message.reply(`${member.user.tag} has been unmuted by ${message.author.tag}.`);
  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Owner","Administrator", "Moderator","Head Admin","Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if (command === "8ball") {
        // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Not a valid question.";
    else {
    message.channel.sendMessage(doMagic8BallVoodoo())
    }
  }

  if(command === "setstatus") {
    if(!message.member.roles.some(r=>["Owner","Administrator", "Moderator","Head Admin","Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    const activity = args.join(" ");
    client.user.setActivity(activity);
  }

  if(command === "dog") {
    const request = require('request');
    const rp = require('random-puppy');
    var subreddits = [
      'rarepuppers'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    try {
      rp(sub).then(url=> {
        const dogEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(`Here’s your Fresh and Instant Doggo ❤️:`)
        .setImage(url)
        .setFooter('If you find a bug, please report it to our staff. ❤️', 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp');
      message.channel.send(dogEmbed);
                })
            ;
    } catch(e) {
      console.log(e);
    };
	}

  if(command === "cat") {
    const request = require('request');
    request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

    }, function(error, response, body) {
      if(!error && response.statusCode == 200) {
      const catEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(`Here’s your Fresh and Instant Cat ❤️:`)
        .setImage(response.request.uri.href)
        .setFooter('If you find a bug, please report it to our staff. ❤️', 'https://cdn.discordapp.com/icons/610434388777369602/08a037cb16972aa3cd069a055d63ca43.webp');
      message.channel.send(catEmbed);
      } else {
        console.log(error);
      }
    })
  }
  
  if(command === "purge") {
    if(!message.member.roles.some(r=>["Owner","Administrator", "Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
      return message.reply("Sorry, you don't have enough permissions to use this!");
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    message.channel.send(`Deleted ${deleteCount} messages!`).then(sentMessage => {
        sentMessage.delete(5000);
    });
  }
});

client.login(config.token);