const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./src/database/config");

const app = express();

// Middlewares
app.use(express.json()); // Para parsear JSON
app.use(cors()); // Para habilitar CORS

// Conexión a la base de datos
dbConnection()
  .then(() => console.log("Conexión a la base de datos exitosa"))
  .catch((err) => console.log("Error en la conexión a la base de datos:", err));

// Importar rutas
const authRoutes = require("./src/routes/auth");
const capRoutes = require("./src/routes/cap");
const opRoutes = require("./src/routes/op");
const userRoutes = require("./src/routes/userRoutes");

// Usar rutas
app.use("/api/auth", authRoutes);
app.use("/api/cap", capRoutes);
app.use("/api/op", opRoutes);
app.use("/api/users", userRoutes);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
