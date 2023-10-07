const express = require("express");
const { AddProd, GetProd } = require("../controllers/prod.controllers");

const routerMenu = express.Router();

routerMenu.post("/AddProd", AddProd);
routerMenu.get("/GetProd", GetProd);

module.exports = routerMenu;
