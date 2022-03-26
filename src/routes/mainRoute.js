const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.index);
router.get('/detalle/:id', mainController.detalleProducto); //Tener en cuenta la ruta /detalle/id

module.exports = router;