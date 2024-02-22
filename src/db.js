const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres.kscsktebbrljkydiljyx",
  host: "aws-0-ap-southeast-1.pooler.supabase.com",
  database: "shop",
  password: "db-web-shop",
  port: 5432,
});

module.exports = pool;
