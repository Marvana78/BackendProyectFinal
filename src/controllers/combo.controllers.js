const Combo = require("../models/combo-model");

const AddCombo = async (req, res) => {
  const { Descripcion, Nombre, Cantidad, Precio, Composicion } = req.body;

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

const DeleteCombo = async (req, res) => {
  try {
    const deletedCombo = await Combo.findByIdAndDelete(req.params.id);

    if (!deletedCombo) {
      return res.status(404).json({ message: "Combo not found" });
    }

    return res.status(200).json({ message: "Combo deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const EditCombo = async (req, res) => {
  try {
    const comboId = req.params.id;
    const updatedComboData = req.body;

    const updatedCombo = await Combo.findByIdAndUpdate(
      comboId,
      updatedComboData,
      { new: true }
    );

    res.json(updatedCombo);
  } catch (error) {
    console.error("Error al editar el combo:", error);
    res.status(500).json({ error: "Error al editar el combo" });
  }
};

module.exports = {
  AddCombo,
  GetCombo,
  DeleteCombo,
  EditCombo,
};
