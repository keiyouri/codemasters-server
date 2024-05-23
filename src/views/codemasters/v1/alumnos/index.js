const express = require('express');
const router = express.Router();
const alumnosController = require('../../../../controllers/alumnos');

router.get('/', alumnosController.getAlumnos);

module.exports = router;
