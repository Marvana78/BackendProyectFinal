const Combo = require("../models/combo-model");

const AddCombo = async (req, res) => {
  const { Categoria, Descripcion, Precio, Nombre, Minimo } = req.body;

  try {
    let combo = await Combo.findOne({ Nombre });

    if (combo) {
      return res.json({
        msg: "El nombre del combo que desea agregar ya existe",
      });
    }

    combo = new Combo(req.body);

    await combo.save();

    res.json({
      msg: "Combo Registrado",
    });
  } catch (error) {
    console.log(error);
  }
};

const GetCombo = async (req, res) => {
  try {
    const combo = await Combo.find();

    if (!combo) {
      return res.status(404).json({ message: "Combo no encontrado" });
    }

    return res.status(200).json(combo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  AddCombo,
  GetCombo,
};
