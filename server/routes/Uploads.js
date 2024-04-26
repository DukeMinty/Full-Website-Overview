const express = require('express');
const router = express.Router();

//Import the database model
const { Uploads } = require("../models")

router.get("/", async (req, res) => {
    const allUploads = await Uploads.findAll();

    //returns all uploads in the database as json objects
    res.json(allUploads);
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const post = await Uploads.findByPk(id);
    res.json(post);
 });

router.post("/", async (req, res) => {
    const upload = req.body;

    //Allows addition of new data to the database
    await Uploads.create(upload);
    res.json(upload);
});

module.exports = router;