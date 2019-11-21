const Discord = require("discord.js");
const Enmap = require("enmap");
var Sequelize = require('sequelize');
const fs = require("fs");
const ytdl = require('ytdl-core');
const { RichEmbed } = require('discord.js');
const client = new Discord.Client();

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

client.on('ready', () => {
  tags.sync();
  console.log(`Successfully loaded and logged in as ${client.user.tag}.`);
  client.user.setPresence({ game: { name: "Quido's Club > All", type: 0 } });
});

client.on("message", (message) => {
  if(message.channel.type === dm){
    if(message.author.id === '631205812005634058') {
      let guild = client.guilds.get('610434388777369602'), // returns a Guild or undefined
      channel;
      if (guild) {
      chat = guild.channels.get('646998136950226945');
      message.channel.send('Mirroring your messages as of now.');
      chat.send(message.content);
    };
  }
};

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
