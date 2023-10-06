const Producto = require("../models/prod-model");

const AddProd = async (req, res) => {
  const { Descripcion, Precio, Nombre, Minimo } = req.body;

  try {
    let producto = await Producto.findOne({ Nombre });

    if (producto) {
      return res.json({
        msg: "El nombre del producto que desea agregar ya existe",
      });
    }

    producto = new Producto(req.body);

    await producto.save();

    res.json({
      msg: "Producto Registrado",
    });
  } catch (error) {
    console.log(error);
  }
};

const GetProd = async (req, res) => {
  try {
    const producto = await Producto.find();

    if (!producto) {
      return res.status(404).json({ message: "Menú no encontrados" });
    }

    return res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  AddProd,
  GetProd,
};
