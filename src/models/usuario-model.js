
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const usuarioSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  rol: {
    type: String,
    enum : ['usuario', 'admin'],
    default: 'usuario'
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

// Hook para encriptar la contraseña antes de guardarla
usuarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = model("Usuario", usuarioSchema);

