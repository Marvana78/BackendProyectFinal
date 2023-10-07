const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://leol2dm:J6NDmndcjItp35y5@cluster0.ks9msnp.mongodb.net/RollingCode', {
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
