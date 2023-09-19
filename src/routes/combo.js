const express = require("express");
const { AddCombo, GetCombo } = require("../controllers/combo.controllers");

//va a ser el nombre del router que definamos
const routerCombo = express.Router();

//peticion get       Req = solicitud, va a estar esperando datos del FrontEnd
routerCombo.post("/AddCombo", AddCombo);
routerCombo.get("/GetCombo", GetCombo);

//module.exports es como vamos a exportar nuestros archivos
module.exports = routerCombo;
