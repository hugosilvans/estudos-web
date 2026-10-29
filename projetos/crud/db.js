const mysql = require('mysql2');

// O pool reutiliza conexões. Credenciais pertencem ao ambiente, nunca ao Git.
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'crud_project',
  port: Number(process.env.DB_PORT || 3306),
});

module.exports = pool;
