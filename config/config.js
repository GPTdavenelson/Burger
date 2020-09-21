require('dotenv').config();

const config =  
{
    development: {
        user: "root",
        password: "root",
        database: "burgers_db",
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    },
        production: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "heroku_e904f3c24c0202f",
        host: process.env.DB_HOST,
    }
}
module.exports = config