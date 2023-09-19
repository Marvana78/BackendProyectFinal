const { Schema, model } = require("mongoose");

const ProductoSchema = Schema({
  Descripcion: {
    type: String,
    required: true,
  },
  Nombre: {
    type: String,
    required: true,
  },
  Minimo: {
    type: Number,
    required: true,
  },
  Precio: {
    type: Number,
    required: true,
  },
});

module.exports = model("Producto", ProductoSchema);
