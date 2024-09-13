const express  = require("express" )
const upload = require("../helpers/Subirimagen")
const controladorCupones = require("../controllers/CuponesControlador")
const RouterCupones  = express.Router()  


RouterCupones.post(
  "/imagencupon",
  upload.single("ImagenCupon"),
  controladorCupones.crear
);

module.exports  = RouterCupones