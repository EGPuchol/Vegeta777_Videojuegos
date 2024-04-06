import React, { useState, useEffect } from "react";
import { useVideojuegos } from "../../../context/Videojuegos.context";
import "./SeccionVideojuegos.css";
import Header from "../../Core/Header/Header";

const SeccionVideojuegos = () => {
  const { videojuegos } = useVideojuegos();
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [categorias, setCategorias] = useState([]);
  const [ordenVotosAscendente, setOrdenVotosAscendente] = useState(true);

  useEffect(() => {
    const categoriasUnicas = [...new Set(videojuegos.map(videojuego => videojuego.categoria))];
    setCategorias(["Todas", ...categoriasUnicas]);
  }, [videojuegos]);

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const handleOrdenVotosClick = () => {
    setOrdenVotosAscendente(!ordenVotosAscendente);
  };

  const videojuegosFiltrados = videojuegos
    .filter((videojuego) =>
      videojuego.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter(videojuego =>
      categoriaSeleccionada === "Todas" || videojuego.categoria === categoriaSeleccionada
    )
    .sort((a, b) => {
      if (ordenVotosAscendente) {
        return a.votos - b.votos;
      } else {
        return b.votos - a.votos;
      }
    });

    return (
      <div>
    <Header />
    <div className="videojuegos-container">

{/* ##TODO - TOP10 VIDEOJUEGOS MÁS VOTADOS */}

{/* ##TODO - FILTRO ALFABÉTICO */}

      <div className="filtro-container">
        <input
          type="text"
          value={busqueda}
          onChange={handleBusquedaChange}
          placeholder="Busca tu videojuego favorito"
          className="buscador-input"
        />
        <select
          value={categoriaSeleccionada}
          onChange={handleCategoriaChange}
          className="filtro-select"
        >
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria}>{categoria}</option>
          ))}
        </select>
        <button onClick={handleOrdenVotosClick}>
          Orden de votos de {ordenVotosAscendente ? "menor a mayor" : "mayor a menor"}
        </button>
      </div>
      <div className="videojuegos-grid">
        {videojuegosFiltrados.map((videojuego) => (
          <div key={videojuego._id} className="videojuego-card">
            <div className="videojuego-img">
              <img src={videojuego.imagen} alt={videojuego.nombre} />
            </div>
            <div className="videojuego-details">
              <h2 className="videojuego-title">{videojuego.nombre}</h2>
              <p className="videojuego-category">Categoría: {videojuego.categoria}</p>
              <p className="videojuego-votes">Votos: {videojuego.votos}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SeccionVideojuegos;
