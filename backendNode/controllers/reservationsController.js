const Reservation = require('../models/reservationsModel');

exports.create = async (req, res) => {
  try {
 console.log('Données reçues côté serveur:', req.body);
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (err) {

    console.error('Erreur lors de la création de la réservation :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.findAll = (req, res) => {
  Reservation.getAll((err, results) => {
    if (err) return res.status(500).json({ error: 'Erreur serveur' });
    res.json(results);
  });
};

exports.delete = (req, res) => {
  Reservation.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erreur serveur' });
    res.json({ message: 'Réservation supprimée' });
  });
};

exports.update = (req, res) => {
  Reservation.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erreur serveur' });
    res.json({ message: 'Réservation mise à jour' });
  });
};
