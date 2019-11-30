const mongoose = require("mongoose");

const WarnsSchema = mongoose.Schema({
    userID: String,
    serverID: String,
    reason: String,
    warns: Number,
});

module.exports = mongoose.model("Warns", WarnsSchema);
