const config = require('../config/config.json');
const mongoose = require('mongoose');

// build credentials (user:password@) for monogDB connection
const credentials = `${config.mongodb.user.length? (config.mongodb.user + ':') : ''}${config.mongodb.pw.length? (config.mongodb.pw + '@') : ''}`;
mongoose.connect(`mongodb://${credentials}${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.db}`, { useNewUrlParser: true });

// establish database connection
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection estabilshed successfully');
});

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/users.model')
};
