// configure how to connect to ur database

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'miguellamas',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

module.exports = pool;