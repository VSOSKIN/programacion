const express = require('express');
const router = express.Router();

// Ruta para novedades
router.get('/novedades', (req, res) => {
  res.render('novedades');  // Esto buscará views/novedades.hbs
});

module.exports = router;