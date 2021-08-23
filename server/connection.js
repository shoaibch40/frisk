/**
 * Creatinf database connection
*/

const {Client}  = require('pg');

const client = new Client({
    host: "localhost",
    user: "shoaib",
    port: 5432,
    password: "123",
    database: "frisk"
});
client.connect();

module.exports = client