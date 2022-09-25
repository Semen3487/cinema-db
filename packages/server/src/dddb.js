const {Pool} = require('pg');
//* const Pool = require('pg').Pool; - варіант імпорту

const pool = new Pool({
  user: 'postgres',
  password: 'admin0404',
  host: 'localhost', // 127.0.0.1
  port: 5432,
  database: 'cinema'
});


module.exports = pool;
