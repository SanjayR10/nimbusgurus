const exp = require("express");
const app = exp();
const mysql = require("mysql");
app.use(exp.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nimbusguru",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});

module.exports = connection;
