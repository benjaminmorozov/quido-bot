const ms = require("ms");
const giveaways = require("discord-giveaways"),
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["🔱OWNER🔱","Discord Manager & Designer","Administrator","Head Moderator","Moderator","Head Admin","Admin","Helper"].includes(r.name)) )
    return message.reply("sorry, you don't have enough permissions to use this!");

    var filter = m => m.author.id === message.author.id;
    message.channel.send(`🎉 Nice, so we're going to make a giveaway! In what channel?`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        var step = collected.first().content;
        let room = step.slice(2, -1);
        if(!room) return message.channel.send(':disappointed_relieved: I could not find that channel');
        collected.first().delete();
        msg.edit('🎉 How many winners should there be?').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            winners = collected.first().content
            if(!isNaN(winners))
              return message.channel.send('Enter a valid number.');
            collected.first().delete();
          msg.edit('🎉 How long should the giveaway last?').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('Enter a valid time.');
            duration = collected.first().content
            collected.first().delete();
            msg.edit('🎉 What are we giving away?').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  giveaways.start(client.channels.get(room), {
                    time: duration,
                    prize: title,
                    winnersCount: winners
                  }).then((gData) => {
                    console.log(gData); // {...} (messageid, end date and more)
                  });
                });
              });
            };
          };
        };
      };
    };
  };
