const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true,  
    },
    email: {
        type: "string",
        required: true,
    },
    password: {
        type: "string",
        required: true,
        min: [6, "Password must be at least 6 Characters long."]
    }
},
{ timestamp: true }
);

module.exports = mongoose.model('User', userSchema);