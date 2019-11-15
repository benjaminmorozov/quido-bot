exports.run = (client, message, args) => {
    function doMagic8BallVoodoo() {
        var rand = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes, definitely.', 'As I see it, yes.', 'Most likely.', 'Yes.', 'Signs point to yes.', 'Better not tell you now.', 'Cannot predict now.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'I\'m very doubtful of that.', 'Concentrate and try again.', 'Cannot predict now.', 'Hell no!'];
        return rand[Math.floor(Math.random()*rand.length)];
    };
    let reason = args.slice(1).join(' ');
    const questionmark = "?";
    if(!message.content.toLowerCase().includes(questionmark)) {
      return message.reply("ask a valid question.");
    }
    if(!reason) {
      return message.reply("ask a valid question.");
    } else {
    message.channel.send(':8ball: `' + doMagic8BallVoodoo() + '`');
    };
}
