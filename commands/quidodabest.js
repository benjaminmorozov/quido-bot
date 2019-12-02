const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@quido-bot-sku03.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
const Score = require("../models/score.js")

exports.run = async (client, message, args) => {
  Score.findOne({userID: '529057345599307776', serverID: message.guild.id}, (err, score) => {
    if(err) console.log(err);
    score.score = score.score + '83000';
    score.save().catch(err => consolelog(err));
  })
};
