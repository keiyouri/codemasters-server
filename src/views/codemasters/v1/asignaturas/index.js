const express = require('express');
const router = express.Router();
const profesoresController = require('../../../../controllers/profesores');

router.get('/', profesoresController.getProfesores);

module.exports = router;
