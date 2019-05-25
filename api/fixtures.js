const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');
const Photo = require('./models/Photo');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;
    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const users = await User.create(
        {username: 'user1', password: '123', displayName: 'Carmen Rodriguez', token: 'qwerty'},
        {username: 'user2', password: '321', displayName: 'Herbert Perry', token: 'asdfg'}
    );

    await Photo.create(
        {title: 'Lorem ipsum', image: 'photo1.jpg', user: users[0]._id},
        {title: 'Some photo title', image: 'photo2.jpg', user: users[0]._id},
        {title: 'Dolor sit amet', image: 'photo3.jpg', user: users[1]._id},
    );

    await connection.close();
};

run().catch(error => {
    console.warn(error);
});
