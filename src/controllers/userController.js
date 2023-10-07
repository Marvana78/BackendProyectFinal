const Usuario = require('../models/usuario-model'); // Ajusta la ruta según sea necesario

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, rol } = req.body;
    const nuevoUsuario = new Usuario({
      name,
      email,
      password,
      rol,
    });
    await nuevoUsuario.save();
    res.status(201).json({ msg: 'Usuario creado exitosamente', usuario: nuevoUsuario });
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al crear el usuario');
  }
};

exports.deactivateUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Imprimimos el ID recibido
    console.log('ID recibido:', id);

    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }
    usuario.isActive = false;
    await usuario.save();
    res.status(200).json({ msg: 'Usuario desactivado exitosamente', usuario });
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al desactivar el usuario');
  }
};
exports.getUsers = async (req, res) => {
  try {
    const usuarios = await Usuario.find();

    if (!usuarios) {
      return res.status(404).json({ message: "Currency data not found" });
    }

    return res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};