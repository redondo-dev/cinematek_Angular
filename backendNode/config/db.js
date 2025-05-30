const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "angular_app"
});

db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la BDD :", err);
  } else {
    console.log("Connecté à la base de données MySQL");
  }
});

module.exports = db;
