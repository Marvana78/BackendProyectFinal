const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('tu_cadena_de_conexión_aqui', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar con la base de datos', error);
    process.exit(1);
  }
};

module.exports = connectDB;
