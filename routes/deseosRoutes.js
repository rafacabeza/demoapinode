// Rutas (rutas/deseos.js)
const express = require('express');
const deseosController = require('../controllers/deseosController');

const router = express.Router();

router.get('/', deseosController.getAllDeseos);
router.get('/add', deseosController.addDeseo);
router.post('/', deseosController.createDeseo);
router.delete('/:id', deseosController.deleteDeseo);

module.exports = router;
