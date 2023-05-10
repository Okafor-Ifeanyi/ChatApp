const mongoose = require("mongoose");
const Schema = mongoose.Schema

const messageSchema = new Schema({
    chatroom: {
        type: Schema.Types.ObjectId,
        required: [true, "Chatroom ID is required"],
        ref: "Chatroom",
    },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, "User ID is required"],
        ref: "User",
    },
    messages: {
        type: String,
        required: [true, "Message is required"]
    }
},
{ 
    timestamp: true
}
);

module.exports = mongoose.model("Message", messageSchema, );