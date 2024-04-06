import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Crear el contexto
const VideojuegosContext = createContext();

// Función para utilizar el contexto
export const useVideojuegos = () => useContext(VideojuegosContext);

// Crear el proveedor
export const VideojuegosProvider = ({ children }) => {
    const [videojuegos, setVideojuegos] = useState([]);

    // Función para cargar los videojuegos desde la API
    const fetchVideojuegos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/');
            setVideojuegos(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error al cargar los videojuegos:", error);
        }
    };

    // Ejecutar fetchVideojuegos al montar el componente
    useEffect(() => {
        fetchVideojuegos();
    }, []);

    // Proporcionar el estado y las funciones a los componentes hijos
    return (
        <VideojuegosContext.Provider value={{ videojuegos, fetchVideojuegos }}>
            {children}
        </VideojuegosContext.Provider>
    );
};
