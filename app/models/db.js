const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  connectionLimit: 10,
  connectTimeout: 30000, // 30 seconds
  acquireTimeout: 30000, // 30 seconds
});

module.exports = connection;