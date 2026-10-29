//Criar parâmetros de conexão (credenciais)

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'HGucb32026@',
  database: 'crud_project',
  port: '3306'
});

//Estabelecer conexão com o banco

connection.connect(err =>{
    if(err) throw err;
    console.log('conectado ao banco de dados');
});

//Exportar o módulo
module.exports = connection;

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
