const Discord = require("discord.js");
const Enmap = require("enmap");
var Sequelize = require('sequelize');
const fs = require("fs");
const { RichEmbed } = require('discord.js');
const client = new Discord.Client();
const DiscordAntiSpam = require("discord-anti-spam");
const AntiSpam = new DiscordAntiSpam({
  warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
  maxInterval: 2000, // Amount of time (in ms) in which messages are cosidered spam.
  warnMessage: "{@user}, please stop spamming.", // Message will be sent in chat upon warning.
  maxDuplicatesWarning: 4, // Amount of same messages sent that will be considered as duplicates that will cause a warning.
  exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"], // Bypass users with at least one of these permissions
  ignoreBots: true, // Ignore bot messages
  verbose: false, // Extended Logs from module
  ignoredUsers: [529057345599307776,524939155117965312,315552443515535361,203149905370415104,207942673900765184,339714610108039168,207044528027205634,547747425712996352,301376346335084555,282413588562313218,278210468362059777,328875130010992640,312242014387175424,429671461213437954,490962890124165156,368696360444362753,382558580093616128,,325739426191900677336867477718040600,350945463546937344,493159676620570636], // Array of string user IDs that are ignored
  ignoredGuilds: [], // Array of string Guild IDs that are ignored
  ignoredChannels: [] // Array of string channels IDs that are ignored
});
const sequelize = new Sequelize('dmmi0dioj6mpk', 'sqknbmnacknhag', '0bcf997703be2c1aadb5bb882fa5d5ae2f46b23b710dfd6edc949bfcf9342908', {
  host: 'ec2-54-228-252-67.eu-west-1.compute.amazonaws.com',
  dialect: 'postgres',
  logging: false,
});
const tags = sequelize.define('tags', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  description: Sequelize.TEXT,
  username: Sequelize.STRING,
  warns: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
});
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

AntiSpam.on("warnEmit", (member) =>  {
  console.log(`Attempt to warn ${member.user.tag}.`)
});
AntiSpam.on("warnAdd", (member) => {
  console.log(`${member.user.tag} has been warned.`)
});
client.on('ready', () => {
  tags.sync();
  console.log(`Successfully loaded and logged in as ${client.user.tag}.`);
  client.user.setPresence({ game: { name: "Quido's Club > All", type: 0 } });
});

client.on("message", (msg) => {
AntiSpam.message(msg);
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);
