const mongoose = require("mongoose");

const WarnSchema = mongoose.Schema({
    userID: String,
    serverID: String,
    reason: String,
    warns: Number,
});

module.exports = mongoose.model("Warns", WarnsSchema);
