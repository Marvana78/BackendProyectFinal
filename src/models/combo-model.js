const { Schema, model } = require("mongoose");

const ComboSchema = Schema({
  Descripcion: {
    type: String,
    required: true,
  },
  Nombre: {
    type: String,
    required: true,
  },
  Cantidad: {
    type: Number,
    required: true,
  },
  Precio: {
    type: Number,
    required: true,
  },
  Composicion: {
    type: Array,
    required: true,
  },
});

module.exports = model("Combo", ComboSchema);
