const mongoose = require("mongoose");

const Usuario = require("../api/models/usuarios.models");

const DB_URL = process.env.DB_URL;

const arrayUsuarios = [
    {
        "nombre": "Usuario1",
        "email":"usuario1@gmail.com",
        "contraseña":"123456"
    }, 
    {
        "nombre": "Usuario2",
        "email":"usuario2@gmail.com",
        "contraseña":"654321"
    }
]
  
mongoose.connect(DB_URL).then(async ()=> {
    const allUsuarios = await Usuario.find();
    if(allUsuarios.length > 0) {
        await Usuario.collection.drop();
        console.log("Usuarios borrados");
    }
})
.catch((error)=> console.log("Error borrando usuarios", error))
.then(async () => {
    const usuarioMap = arrayUsuarios.map((usuario)=> new Usuario(usuario));
    await Usuario.insertMany(usuarioMap);
    console.log("Usuarios añadidos correctamente");
})
.catch((error)=> console.log("Error al añadir los usuarios", error))
.finally(()=> mongoose.disconnect())