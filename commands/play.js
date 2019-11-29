// Put the Music module in the new Client object.
// This allows for easy access to all the modules
// functions and data.
client.music = require("discord.js-musicbot-addon");

// Now we start the music module.
client.music.start(client, {
  // Set the api key used for YouTube.
  youtubeKey: "AIzaSyBqox6JvdyuGF7218IoUVtgA5bYe_q_msg",

  // Make it so anyone in the voice channel can skip the
  // currently playing song.
  anyoneCanSkip: true,

  // Make it so the owner (you) bypass permissions for music.
  ownerOverMember: true,

  // The cooldown Object.
  cooldown: {
    // This disables the cooldown. Not recommended.
    enabled: false
  }
});
exports.run = async (client, message, args) => {
  if (msg.author.bot) return; // Good practice to do this.

  // I set the Client to this just for ease.
  // You'll probably have access to it another
  // way, but this still works.
  const client = msg.client;

  // Get the command from the message.
  const command = message.substring(musicbot.botPrefix.length).split(/[ \n]/)[0].trim();

  // Get the suffix, the String after the command.
  const suffix = message.substring(musicbot.botPrefix.length + command.length).trim();

  // Set the prefix to "!". This is a horrible way to set
  // one, but it will do for now.
  let prefix = "!"

  // Now we check if the message starts with the prefix,
  // and asks for the PLAY command.
  if (msg.content.startsWith(prefix) && command == "play") {
    // Now we pass the Message Object (msg) and
    // the suffix. It will then proceed as it would
    // with the bot normally.
    client.music.bot.playFunction(msg, suffix);
  };
};
