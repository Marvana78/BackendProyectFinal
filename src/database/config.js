



const mongoose = require("mongoose");

const dbConnection = async () => {
  const connectionString = 'mongodb+srv://leol2dm:J6NDmndcjItp35y5@cluster0.ks9msnp.mongodb.net/RollingCode'; // Tu cadena de conexión

  try {
    await mongoose.connect(process.env.DB_CNN);

    console.log("conectado a la base de datos");
  } catch (error) {
    console.log("Problemas con la conexion a la base de datos");
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


