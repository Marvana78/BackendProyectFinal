// Importaciones existentes
const express = require("express");
const { dbConnection } = require("./src/database/config");
const app = express();
const cors = require("cors");

// Importamos dotEnv
require("dotenv").config();

// Lectura y parseo del body
app.use(express.json());

// Configuración CORS
app.use(cors());

// Conexión a la base de datos
dbConnection();

// Importación de las nuevas rutas de usuario
const userRoutes = require('./src/routes/userRoutes'); // Ajusta la ruta según la ubicación de tu archivo userRoutes.js

// Rutas existentes
app.use("/auth", require("./src/routes/auth"));
app.use("/cap", require("./src/routes/cap"));
app.use("/op", require("./src/routes/op"));

// Nuevas rutas de usuario
app.use("/api/users", userRoutes); // Aquí conectamos las rutas de usuario

// Puerto donde correrá la aplicación
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
