const Usuario = require('../models/usuario-model'); // Ajusta la ruta según sea necesario

exports.createUser = async (req, res) => {
  console.log("Cuerpo de la petición:", req.body);
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
