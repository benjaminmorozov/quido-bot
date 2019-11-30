const mongoose = require("mongoose");

const warnSchema = mongoose.Schema({
    userID: String,
    serverID: String,
    score: Number,
});

module.exports = mongoose.model("Money", moneySchema);
