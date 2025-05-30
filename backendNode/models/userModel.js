const db = require('../config/db');

const createUser = (user, callback) => {
  const { nom, prenom, email, password:hashedPassword } = user;
  const sql = "INSERT INTO users (nom, prenom, email, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [nom, prenom, email, hashedPassword], callback);
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
    callback(null, results[0]); // retourne l'utilisateur trouvé
  });
};

module.exports = {
  createUser,
  getAllUsers,
  findUserByEmail
};
