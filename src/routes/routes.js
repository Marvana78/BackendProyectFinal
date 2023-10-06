// routes.js
const express = require('express');
const router = express.Router();
const User = require('./models/User'); // Importa el modelo de usuario

// Configura las cabeceras CORS para permitir solicitudes desde http://localhost:5173 (tu frontend)
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// Ruta para crear un nuevo usuario
router.post('/api/users/create', async (req, res) => {
    try {
      // Aquí maneja la creación de un nuevo usuario a partir de los datos en req.body
      // ...
      res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Hubo un error al crear el usuario' });
    }
  });
// Ruta para obtener todos los usuarios registrados
router.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

module.exports = router;
