const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`Quido je láska ❤️`);
});

client.commands = new Enmap();

const init = async () => {
    const cmdFiles = await readdir("./commands/");
    client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
    cmdFiles.forEach(f => {
      if (!f.endsWith(".js")) return;
      const response = client.loadCommand(f);
      if (response) console.log(response);
    });
};

client.login(config.token);