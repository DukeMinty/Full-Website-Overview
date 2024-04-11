const express = require('express');
const app = express();
let portNum = 3001;

const db = require('./models');
const { INTEGER } = require('sequelize');

//Requires databases to be sequelized, then the port will open
db.sequelize.sync().then(() => {
    app.listen(portNum, () => {
        console.log("Server is running on port " + portNum);
    });
});


