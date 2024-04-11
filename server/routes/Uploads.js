const express = require('express');
const router = express.Router();
const { Uploads } = require('../models')
router.get("/", async (req, res) => {
    const listOfUploads = await Uploads.findAll();
    res.json(listOfUploads);
});

router.post("/", async (req, res)=>{
    const post = req.body;
    await Uploads.create(post);
    res.json(post);
});

module.exports = router;