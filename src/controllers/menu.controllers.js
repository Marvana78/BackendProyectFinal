const Menu = require("../models/menu-model");

const AddMenu = async (req, res) => {
  const { Descripcion, Precio, Nombre, Minimo } = req.body;

  try {
    let menu = await Menu.findOne({ Nombre });

    if (menu) {
      return res.json({
        msg: "El nombre del menú que desea agregar ya existe",
      });
    }


    menu = new Menu({ Descripcion, Monto:Precio, Nombre, Unidades:Minimo });

    await menu.save();

    res.json({
      msg: "Menú Registrado",
    });
  } catch (error) {
    console.log(error);
  }
};

const GetMenu = async (req, res) => {
  try {
    const menu = await Menu.find();

    if (!menu) {
      return res.status(404).json({ message: "Menú no encontrados" });
    }

    return res.status(200).json(menu);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  AddMenu,
  GetMenu,
};
