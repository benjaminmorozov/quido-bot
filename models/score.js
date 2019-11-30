const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
    userID: String,
    serverID: String,
    score: Number,
});

module.exports = mongoose.model("Score", scoreSchema);
