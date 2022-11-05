const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password : "papipapi123",
  host: "localhost",
  port: 5432,
  database: "digitalmoment"
});


module.exports = pool;