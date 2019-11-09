module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;

    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;

    const reload = "Prosím si jeden reload";
    if(message.content.toLowerCase().includes(reload)) {
      client.user.setPresence({ game: { name: "Quido's Club > All", type: 0 } });
      return message.reply("Asi zablokuju možnost nastavit status.")
    };

    // Run the command
    cmd.run(client, message, args);
};
