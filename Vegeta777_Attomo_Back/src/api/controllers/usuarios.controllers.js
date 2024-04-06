const Usuarios = require("../models/usuarios.models")

const getUsuarios = async (req,res)=> {
    try{
        const allUsuarios = await Usuarios.find();
        return res.status(200).json(allUsuarios)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postUsuario = async (req,res)=> {
    try {
        const newUsuarios = new Usuarios(req.body);
        const createdUsuarios = await newUsuarios.save();
        return res.status(201).json(createdUsuarios);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const putUsuario = async (req,res)=> {
    try {
        const {id} = req.params;
        const putUsuarios = new Usuarios(req.body) ;
        putUsuarios._id=id
        const updatedUsuarios = await Usuarios.findByIdAndUpdate(id, putUsuarios, {new:true});
        if (!updatedUsuarios) {
            return res.status(404).json({message:"No existe ningún usuario con ese ID"})
        }
        return res.status(200).json(updatedUsuarios);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteUsuario = async (req,res)=> {
    try {
        const {id} = req.params;
        const deleteUsuarios = await Usuarios.findByIdAndDelete(id);
        if (!deleteUsuarios) {
            return res.status(404).json({message:"No existe ningún videojuego con ese ID"})
        }
        return res.status(200).json(deleteUsuarios);
    } catch (error) {
        return res.status(500).json(error)
    }
};

module.exports = {getUsuarios, postUsuario, putUsuario, deleteUsuario}