const express = require("express");
const {
  AddProd,
  GetProd,
  DeleteProd,
  EditProd,
} = require("../controllers/prod.controllers");

const routerProd = express.Router();

routerProd.post("/AddProd", AddProd);
routerProd.get("/GetProd", GetProd);
routerProd.delete("/DeleteProd/:id", DeleteProd);
routerProd.put("/EditProd/:id", EditProd);

module.exports = routerProd;
