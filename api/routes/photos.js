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

router.delete('/:id', auth, async (req, res) => {
    try {
        const photo = await Photo.findById(req.params.id);
        
        if (photo.user.equals(req.user._id)) {
            await photo.remove()

            return res.status(200).send({message: 'Photo deleted!'});
        } else {
            return res.status(403).send({message: 'Access forbidden!'});
        }
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;
