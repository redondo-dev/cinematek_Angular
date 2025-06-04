const db = require('../config/db');

const createUser = (user, callback) => {
  const { nom, prenom, email, password:hashedPassword ,role} = user;
  const sql = "INSERT INTO users (nom, prenom, email, password, role) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [nom, prenom, email, hashedPassword, role], callback);
};


const getAllUsers=(callback)=> {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

const findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(null, null);
    callback(null, results[0]);
  });
};

module.exports = {
  createUser,
  getAllUsers,
  findUserByEmail
};
