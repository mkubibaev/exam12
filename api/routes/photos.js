const express = require('express');

const upload = require('../middleware/upload');
const auth = require('../middleware/auth');
const Photo = require('../models/Photo');

const router = express.Router();

router.get('/', async (req, res) => {
    const criteria = {}

    if (req.query.user) {
        criteria.user = req.query.user;
    }

    try {
        const photos = await Photo.find(criteria).populate('user', 'displayName');

        return res.send(photos);
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.post('/', [auth, upload.single('image')], async (req, res) => {
    const photoData = {
        title: req.body.title,
        user: req.user._id
    };

    if (req.file) {
        photoData.image = req.file.filename;
    }

    try {
        const photo = new Photo(photoData);

        await photo.save();
        return res.send({message: 'Photo added!', photo});
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;
