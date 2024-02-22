const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "shop",
  password: "000",
  port: 5432,
});

module.exports = pool;
