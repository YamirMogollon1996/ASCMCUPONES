
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}


const express = require('express');
const db = require('./coneccion/db');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
require("./asociaiones/asociaones")

// Importa los routers
const authRoutes = require('./router/authRoutes');
const certRoutes = require('./router/certRoutes');
const RouterCupones = require("./router/rutaCupones");
const ClienteRouter = require("./router/cliente");

// Asegúrate de que la carpeta 'uploads' exista
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Este middleware debe estar presente

// Ruta estática para servir archivos subidos
app.use('/uploads', express.static(uploadsDir));

app.use(ClienteRouter);
app.use(RouterCupones);
// Usa los routers
app.use('/api', authRoutes); // Añade prefijo '/api' a las rutas de autenticación
app.use('/api', certRoutes); // Añade prefijo '/api' a las rutas de certificados

app.listen(3000, () => {
  console.log("Conexión exitosa en el puerto 3000");
  bootstrap();
});

const bootstrap = async () => {
  try {
    await db.authenticate();
    console.log("Inicio la base de datos");
    await db.sync({ force:   false });
    console.log("Tablas agregadas");
  } catch (error) {
    console.error("Error durante la sincronización o autenticación de la base de datos:", error);
  }
};
