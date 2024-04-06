import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VideojuegosProvider } from "./context/Videojuegos.context";
import SeccionVideojuegos from "./components/Pages/SeccionVideojuegos/SeccionVideojuegos";
import Register from "./components/Pages/Register/Register";

function App() {
  return (
    <Router> 
      <VideojuegosProvider>
        <Routes>
          <Route path="/" element={<SeccionVideojuegos />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </VideojuegosProvider>
    </Router>
  );
}

export default App;
