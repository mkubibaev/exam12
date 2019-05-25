const express = require('express');

const Photo = require('../models/Photo');

const router = express.Router();

router.get('/', async (req, res) => {
    const criteria = {}

    if (req.query.user) {
        criteria.user = req.query.user
    }

    try {
        const photos = await Photo.find(criteria).populate('user', 'displayName');

        return res.send(photos);
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;
