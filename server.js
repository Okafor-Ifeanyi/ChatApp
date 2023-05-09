require("dotenv").config()
const mongoose = require("mongoose");

// console.log(process.env.DATABASE)
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err.message);
});

mongoose.connection.once("open", ()=>{
    console.log("MongoDB Conntected!");
})

// Bring in the models
require('./models/user.model'); 
require('./models/chatroom.model');
require('./models/message.model');


const app = require('./app');

app.listen(5000, () =>{
    console.log('Server listen on port 5000');
})