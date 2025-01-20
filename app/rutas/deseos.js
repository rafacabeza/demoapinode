// Rutas (rutas/deseos.js)
const express = require('express');
const deseosController = require('../controllers/deseosController');

const router = express.Router();

router.get('/', () =>{return "hola mundo";});
router.post('/', deseosController.createDeseo);
router.delete('/:id', deseosController.deleteDeseo);

module.exports = router;
