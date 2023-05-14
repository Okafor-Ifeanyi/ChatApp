const express = require('express');
const errorHandlers = require('./handlers/error.handler')
const app = express();
require("dotenv").config()

// Setup for JSON files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup Cross-Origin Resource Sharing 
// to enable passing requests through the frontend
app.use(require("cors")())

// Setup app routes to call routes 
app.use("/users", require("./routers/user.router"));
app.use("/chatroom", require("./routers/chatroom.route"));

// Setup error handler to stop app from breaking
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);

// Using a flow control to specify ENV
if (process.env.ENV === "DEVELOPMENT") {
    app.use(errorHandlers.developmentErrors); 
} else {
    app.use(errorHandlers.productionErrors); 
}

module.exports = app