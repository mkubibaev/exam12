const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const users = require('./routes/users');
const photos = require('./routes/photos');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect(config.dbUrl, config.mongoOptions).then(() => {
    app.use('/users', users);
    app.use('/photos', photos);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
});
