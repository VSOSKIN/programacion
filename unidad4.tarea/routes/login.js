const express = require('express');
const router = express.Router();
const pool = require('../db');

// mostrar formulario
router.get('/login', (req, res) => {
  res.render('login');
});

// recibir usuario y password
router.post('/login', async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const [rows] = await pool.query(
      'SELECT * FROM usuarios WHERE usuario = ? AND password = ?',
      [usuario, password]
    );

if (rows.length > 0) {
  res.redirect('/admin/novedades');
}

  } catch (err) {
    console.log(err);
    res.send('Error en base de datos');
  }
});


router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.error(err);
        return res.send('Error al cerrar sesión');
      }
      // Redirige a la página principal en vez de login
      res.redirect('/');
    });
  } else {
    // Si no hay sesión activa, también redirige a la página principal
    res.redirect('/');
  }
});


module.exports = router;


