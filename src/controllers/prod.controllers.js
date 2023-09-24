const Producto = require("../models/prod-model");

const AddProd = async (req, res) => {
  const { Categoria, Descripcion, Precio, Nombre, Minimo } = req.body;

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

const DeleteProd = async (req, res) => {
  try {
    const deletedProduct = await Producto.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const EditProd = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProductData = req.body;

    const updatedProduct = await Producto.findByIdAndUpdate(
      productId,
      updatedProductData,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    console.error("Error al editar el producto:", error);
    res.status(500).json({ error: "Error al editar el producto" });
  }
};

module.exports = {
  AddProd,
  GetProd,
  DeleteProd,
  EditProd,
};
