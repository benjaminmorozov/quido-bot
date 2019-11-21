const mongoose = require("mongoose");

const warnSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.objectId,
    username: String,
    userID: String,
    reason
});
