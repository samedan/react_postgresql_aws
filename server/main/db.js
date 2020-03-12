const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "your_password",
  post: 5432
});

module.exports = pool;
