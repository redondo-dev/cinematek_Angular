const db = require('../config/db');

const Reservation = {
  create: (data, callback) => {
    const sql = 'INSERT INTO reservations (name,user_id,film_id,date, seats,status) VALUES (?, ?, ?, ?,?,?)';
    db.query(sql, [data.name,data.user_id ,data.film_id, data.date, data.seats, data.status||'pending'], callback);
  },

  // getAll: (callback) => {
  //   db.query('SELECT * FROM reservations', callback);
  // },

  // delete: (id, callback) => {
  //   db.query('DELETE FROM reservations WHERE id = ?', [id], callback);
  // },

  // update: (id, data, callback) => {
  //   const sql = 'UPDATE reservations SET name = ?, movie = ?, date = ?, seats = ? WHERE id = ?';
  //   db.query(sql, [data.name, data.user_id,data.film_id, data.date, data.seats, id], callback);
  // }
};

module.exports=Reservation;
