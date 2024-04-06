import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const VideojuegosContext = createContext();

export const useVideojuegos = () => useContext(VideojuegosContext);

export const VideojuegosProvider = ({ children }) => {
    const [videojuegos, setVideojuegos] = useState([]);

    const fetchVideojuegos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/');
            setVideojuegos(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error al cargar los videojuegos:", error);
        }
    };

    useEffect(() => {
        fetchVideojuegos();
    }, []);

    return (
        <VideojuegosContext.Provider value={{ videojuegos, fetchVideojuegos }}>
            {children}
        </VideojuegosContext.Provider>
    );
};
