const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Importa el middleware de CORS
dotenv.config();

const { connect } = require("./src/utils/db");

const videojuegosRoutes = require("./src/api/routes/videojuegos.routes");

const PORT = process.env.PORT;

const app = express();
connect();

// Agrega el middleware de CORS a tu aplicación
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", videojuegosRoutes);

app.listen(PORT, () =>
    console.log(`Escuchando en el puerto http://localhost:${PORT}`)
);
