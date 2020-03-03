const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: '1q2w3e4r',
  host: "localhost",
  port: 5432,
  database: "launchstoredb"
});