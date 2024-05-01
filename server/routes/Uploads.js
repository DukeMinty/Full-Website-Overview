const express = require('express');
const router = express.Router();

//Import the database model
const { Uploads } = require("../models")

router.get("/", async (req, res) => {
    const allUploads = await Uploads.findAll();

    const reversedUploads = allUploads.reverse();

    //returns all uploads in the database as json objects
    res.json(reversedUploads);
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

router.post('/:id/like', async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Uploads.findByPk(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Increment likeCounter
        post.likeCounter += 1;
        await post.save();

        res.json({ message: 'Like counter updated successfully', post });
    } catch (error) {
        console.error('Error updating like counter:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/:id/unlike', async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Uploads.findByPk(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Decrement likeCounter
        post.likeCounter -= 1;
        await post.save();

        res.json({ message: 'Unlike successful', post });
    } catch (error) {
        console.error('Error updating like counter:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;