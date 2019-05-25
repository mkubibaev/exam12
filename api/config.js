const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    dbUrl: 'mongodb://localhost/exam12_photos',
    mongoOptions: {
        useNewUrlParser: true,
        useCreateIndex: true,
    },
    facebook: {
        appId: '703061893495356',
        appSecret: 'dfebae893ab72410887c0ddae7c8da62'
    }
};
