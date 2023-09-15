const mongoose = require('mongoose');

const dbConnection = async () => {
  const connectionString = process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/restaurantDB';

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Base de datos online');
  } catch (error) {
    console.log('Error al conectar a la base de datos: ', error);
    throw new Error('Error al iniciar la base de datos');
  }
};

// Función para cerrar la conexión, si se necesita
const closeConnection = async () => {
  try {
    await mongoose.connection.close();
    console.log('Conexión a la base de datos cerrada');
  } catch (error) {
    console.log('Error al cerrar la conexión a la base de datos: ', error);
  }
};

module.exports = { dbConnection, closeConnection };
