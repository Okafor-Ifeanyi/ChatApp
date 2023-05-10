const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Must Have a Name"],  
    }
},
{ timestamp: true }
);

module.exports = mongoose.model('Chatroom', chatroomSchema);