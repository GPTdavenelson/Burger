// Set up MySQL connection.
const mysql = require('mysql');

// Listens to what enviornment is running from start script (package.json)
// and uses the correct MySql configuration from config.json
const env = process.env.NODE_ENV || 'development'; // defaults to development if none configured

const config = require('./config');
const envConfig = config[env]


let connection = mysql.createConnection(envConfig);

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
