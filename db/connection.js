const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'roster_master'
});

module.exports = db;
