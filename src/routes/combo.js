const express = require("express");
const {
  AddCombo,
  GetCombo,
  DeleteCombo,
  EditCombo,
} = require("../controllers/combo.controllers");

const routerCombo = express.Router();

routerCombo.post("/AddCombo", AddCombo);
routerCombo.get("/GetCombo", GetCombo);
routerCombo.delete("/DeleteCombo/:id", DeleteCombo);
routerCombo.put("/EditCombo/:id", EditCombo);

module.exports = routerCombo;
