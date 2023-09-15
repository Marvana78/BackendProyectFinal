const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();
const { dbConnection } = require("./src/database/config");

const app = express();

// Opciones de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Mi API",
      version: "1.0.0",
      description: "Documentación de mi API",
      contact: {
        name: "Rodrigo"
      },
      servers: ["http://localhost:4000"]
    }
  },
  // Ubicación de los archivos de rutas para la documentación
  apis: ["./src/routes/*.js"]
};

// Inicialización de Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middlewares
app.use(express.json()); // Para parsear JSON
app.use(cors()); // Para habilitar CORS

// Conexión a la base de datos
dbConnection()
  .then(() => console.log("Conexión a la base de datos exitosa"))
  .catch((err) => {
    console.error("Error en la conexión a la base de datos:", err);
    process.exit(1); // Cierra el proceso si la conexión falla
  });

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
