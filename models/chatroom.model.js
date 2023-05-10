const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Must Have a Name"],  
    },
    OwnerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: "OwnerID needed"
    }
},
{ timestamp: true }
);

module.exports = mongoose.model('Chatroom', chatroomSchema);