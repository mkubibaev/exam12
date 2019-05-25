const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    title: {
        type: String,
        required: 'Photo title is required!'
    },
    image: {
        type: String,
        required: 'Image is required!'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: 'Photo author is required!'
    },
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
