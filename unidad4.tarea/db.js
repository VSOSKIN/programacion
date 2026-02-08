const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // si MariaDB tiene clave ponela acá
  database: 'proyecto',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
