const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');


router.post('/', reservationsController.create);
router.get('/', reservationsController.findAll);
router.delete('/:id', reservationsController.delete);
router.put('/:id', reservationsController.update);


module.exports = router;
