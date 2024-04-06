const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videojuegosSchema = new Schema(
    {
        imagen: {type: String, required: true},
        nombre: {type: String, required: true},
        categoria: {type: String, required: true},
        votos: {type: Number, required: true},
},{
    // timestamps:true
});

const Videojuego = mongoose.model("videojuegos", videojuegosSchema);

module.exports = Videojuego;