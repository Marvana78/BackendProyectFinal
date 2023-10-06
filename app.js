const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();
const { dbConnection, closeConnection, testDBConnection } = require("./src/database/config");

const app = express();

// Configuración de CORS (Esto ya está bien posicionado)
app.use(cors({
  origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita las cookies para las solicitudes entre dominios
}));

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
  apis: ["./src/routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middlewares
app.use(express.json());

// Conexión a la base de datos
dbConnection()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
    return testDBConnection();
  })
  .then(() => console.log("Test de conexión a DB exitoso"))
  .catch((err) => {
    console.error("Error en la conexión a la base de datos:", err);
    process.exit(1);
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
  res.status(500).json({ error: err.message }); // Devuelve el mensaje de error en el response
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
