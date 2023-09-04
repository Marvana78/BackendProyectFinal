const express = require("express");
const {
  Operacion,
  obtenerOperaciones,
  AcceptOp,
  CancelOp,
  DeleteOp,
} = require("../controllers/op.controllers");

//va a ser el nombre del router que definamos
const routerOp = express.Router();

routerOp.post("/Operacion", Operacion);
routerOp.get("/obtenerOperaciones", obtenerOperaciones);
routerOp.post("/AcceptOp", AcceptOp);
routerOp.post("/CancelOp", CancelOp);
routerOp.delete("/DeleteOp", DeleteOp);

//module.exports es como vamos a exportar nuestros archivos
module.exports = routerOp;
