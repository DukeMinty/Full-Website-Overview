//Import express
const express = require("express");
const app = express();

const cors = require("cors");

//Define the model for how the database is structured
const dataBase = require("./models");

//Define port No.
const port = 3001;

//parses the json data to be used
app.use(express.json());

app.use(cors());

//Router middleware
const router = require("./routes/Uploads");
app.use("/posts", router);

dataBase.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("Server running on port " + port);
  });
});