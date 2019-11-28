exports.run = async (client, message, args) => {
  var message = message;
  try {

    // Variables
    var returntime;
    var timemeasure;
    var userid;
    msg = msg.content.split(' ');
    console.log('Message recieved from ' + message.author.id + ' at ' + Date.now().toString());

    // Sets the userid for the recipiant
    userid = client.users.get(msg[1].replace('<@!', '').slice(0, -1))

    // Sets the return time
    timemeasure = msg[2].substring((msg[2].length - 1), (msg[2].length))
    returntime = msg[2].substring(0, (msg[2].length - 1))

    // Based off the delimiter, sets the time
    switch (timemeasure) {
      case 's':
        returntime = returntime * 1000;
        break;

      case 'm':
        returntime = returntime * 1000 * 60;
        break;

      case 'h':
        returntime = returntime * 1000 * 60 * 60;
        break;

      case 'd':
        returntime = returntime * 1000 * 60 * 60 * 24;
        break;

      default:
        returntime = returntime * 1000;
        break;
    }

    // Returns the Message
    client.setTimeout(function () {
      // Removes the first 2 array items
      msg.shift();
      msg.shift();
      msg.shift();

      // Creates the message
      var content = msg.join();
      content = content.replaceAll(',', ' ');
      message.channel.send(userid + content);
      console.log('Message sent to ' + userid + ' at ' + Date.now().toString());
    }, returntime)
  } catch (e) {
    message.reply("An error has occured, please make sure the command has a time delimiter and message");
    console.error(e.toString());
  }
};
