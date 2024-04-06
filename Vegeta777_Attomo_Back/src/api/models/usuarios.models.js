const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuariosSchema = new Schema(
    {
        nombre: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        contraseña: {type: String, required: true},
},{
    // timestamps:true
});

const Usuario = mongoose.model("usuarios", usuariosSchema);

module.exports = Usuario;