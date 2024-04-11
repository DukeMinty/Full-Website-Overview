//import express
const express = require('express');
const app = express();

app.use(express.json());

//change this to change the port the project runs on
let portNum = 3050;

const db = require('./models');
const { INTEGER } = require('sequelize');

//router logic
const postRouter = require('./routes/Uploads');
//middleware
app.use("/uploads", postRouter);


//Requires databases to be sequelized, then the port will open
db.sequelize.sync().then(() => {
    app.listen(portNum, () => {
        console.log("Server is running on port " + portNum);
    });
});


