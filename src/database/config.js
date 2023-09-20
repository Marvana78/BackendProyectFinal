const mongoose = require('mongoose');

const dbConnection = async () => {
  const connectionString = 'mongodb+srv://leomeiners1:6SWQ3vV8PJudTm82@portaldm.a5dtqas.mongodb.net/RollingCode'; // Tu cadena de conexión

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

const testDBConnection = async () => {
  try {
    // Usamos el método 'ping' para probar la conexión
    await mongoose.connection.db.command({ ping: 1 });
    console.log('Ping a MongoDB exitoso');
  } catch (error) {
    console.log('Ping a MongoDB fallido', error);
  }
};

const closeConnection = async () => {
  try {
    await mongoose.connection.close();
    console.log('Conexión a la base de datos cerrada');
  } catch (error) {
    console.log('Error al cerrar la conexión a la base de datos: ', error);
  }
};

module.exports = { dbConnection, closeConnection, testDBConnection };
