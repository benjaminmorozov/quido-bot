mongoose.connect("mongodb+srv://admin:admin@quido-bot-sku03.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
const Score = require("./models/score.js")
module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;

    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) {
      let scoretoadd = Math.ceil(Math.random() * 50);
      constole.log(scoretoadd + " score");
      Score.findOne({userID: message.author.id, serverID: message.guild.id}, (err, score) => {
        if(err) console.log(err);
        if(!score){
          const newScore = new Score({
            userID: message.author.id,
            serverID: message.guild.id,
            score: scoretoadd
          })

          newScore.save().catch(err => console.log(err));
        } else {
          score.score = score.score + scoretoadd;
          score.save().catch(err => consolelog(err));
        }
      })
    };
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;

    // Run the command
    cmd.run(client, message, args, code);
};
