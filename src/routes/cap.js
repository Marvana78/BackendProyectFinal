const express = require('express');
const router = express.Router();

// Ruta de ejemplo
router.get('/', (req, res) => {
  res.json({ message: '¡Hola desde la ruta cap!' });
});

module.exports = router;
