exports.run = (client, message, args) => {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    let reason = args.join(" ").slice(22);
    let user = message.mentions.members.first();
    if(!user)
        return message.reply("please mention a valid member of this server.");

    if(!reason) reason = "No reason provided.";

    message.reply("report was sent to the staff ❤️. Thanks for being a part of our community.");
    message.guild.channels.find("id" , "640190361012011008").send({embed: {
        color: 0xff5353,
        author: {
          name: 'Report:',
        },
        fields: [{
          name: "Reported Member:",
          value: `<@${user.id}>`,
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
          }
        ],
        footer: {
          icon_url: `${client.user.avatarURL}`,
          text: "If you find a bug, please report it to our staff. ❤️"
        }
      }
    });;
};
