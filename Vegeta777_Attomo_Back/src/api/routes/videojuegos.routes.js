const express = require("express")
const videojuegosRoutes = express.Router();
const {getVideojuegos, postVideojuego, putVideojuego, deleteVideojuego} = require("../controllers/videojuegos.controllers")

videojuegosRoutes.get("/",getVideojuegos);
videojuegosRoutes.post("/",postVideojuego);
videojuegosRoutes.put("/:id", putVideojuego);
videojuegosRoutes.delete("/:id", deleteVideojuego);

module.exports=videojuegosRoutes;