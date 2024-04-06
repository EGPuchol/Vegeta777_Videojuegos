const Videojuego = require("../models/videojuegos.models")

const getVideojuegos = async (req,res)=> {
    try{
        const allVideojuegos = await Videojuego.find();
        return res.status(200).json(allVideojuegos)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postVideojuego = async (req,res)=> {
    try {
        // console.log(req.body)
        const newVideojuego = new Videojuego(req.body);
        const createdVideojuego = await newVideojuego.save();
        return res.status(201).json(createdVideojuego);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const putVideojuego = async (req,res)=> {
    try {
        const {id} = req.params;
        const putVideojuego = new Videojuego(req.body) ;
        putVideojuego._id=id
        const updatedVideojuego = await Videojuego.findByIdAndUpdate(id, putVideojuego, {new:true});
        if (!updatedVideojuego) {
            return res.status(404).json({message:"No existe ningún videojuego con ese ID"})
        }
        return res.status(200).json(updatedVideojuego);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteVideojuego = async (req,res)=> {
    try {
        const {id} = req.params;
        const deleteVideojuego = await Videojuego.findByIdAndDelete(id);
        if (!deleteVideojuego) {
            return res.status(404).json({message:"No existe ningún videojuego con ese ID"})
        }
        return res.status(200).json(deleteVideojuego);
    } catch (error) {
        return res.status(500).json(error)
    }
};

module.exports = {getVideojuegos, postVideojuego, putVideojuego, deleteVideojuego}