const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const connect = async()=> {
    try{
        const db = await mongoose.connect(DB_URL);
        const { name, host } = db.connection;
        console.log(`conectado a base de datos de ${name} db en el host ${host}`)
    } catch (error){
        console.log("hemos tenido un error al conectar a la BBDD", error)
    }
};

module.exports = {connect};