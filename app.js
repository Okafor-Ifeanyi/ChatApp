const express = require('express');
const errorHandlers = require('./handlers/error.handler')
const app = express();
require("dotenv").config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./routers/user.router"));

app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);

// Bringing in the routes

if (process.env.ENV === "DEVELOPMENT") {
    app.use(errorHandlers.developmentErrors); 
} else {
    app.use(errorHandlers.productionErrors); 
}

module.exports = app