const mysql = require('mysql2');

// Configuración de la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'demo',
});

console.log(pool);
module.exports = pool.promise();
