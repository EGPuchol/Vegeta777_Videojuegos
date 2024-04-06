const express = require("express")
const usuariosRoutes = express.Router();
const {getUsuarios, postUsuario, putUsuario, deleteUsuario} = require("../controllers/usuarios.controllers")

usuariosRoutes.get("/",getUsuarios);
usuariosRoutes.post("/",postUsuario);
usuariosRoutes.put("/:id", putUsuario);
usuariosRoutes.delete("/:id", deleteUsuario);

module.exports=usuariosRoutes;