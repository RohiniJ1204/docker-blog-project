const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password",
  database: "blogdb"
});

function connectDB() {
  db.connect(err => {
    if (err) {
      console.log("MySQL not ready, retrying in 5 seconds...");
      setTimeout(connectDB, 5000);
    } else {
      console.log("Connected to MySQL");
    }
  });
}

connectDB();

app.get("/", (req, res) => {
  res.send("Blog App running inside Docker 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
