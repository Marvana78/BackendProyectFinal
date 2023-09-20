const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://leomeiners1:6SWQ3vV8PJudTm82@portaldm.a5dtqas.mongodb.net/RollingCode', {
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
