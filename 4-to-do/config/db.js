const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Viç123!@#',
    database: 'mysql'
})

module.exports = pool;