const express = require("express");
const { AddMenu, GetMenu } = require("../controllers/menu.controllers");

const routerMenu = express.Router();

routerMenu.post("/AddMenu", AddMenu);
routerMenu.get("/GetMenu", GetMenu);

module.exports = routerMenu;
