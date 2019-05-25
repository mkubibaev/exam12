const express = require('express');

const Photo = require('../models/Photo');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const photos = await Photo.find();

        return res.send(photos);
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;
