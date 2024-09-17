const express  = require("express" )
const upload = require("../helpers/Subirimagen")
const controladorCupones = require("../controllers/CuponesControlador")
const RouterCupones  = express.Router()  
RouterCupones.post("/imagencupon",  upload.single("ImagenCupon") ,  controladorCupones.crear);
RouterCupones.get("/getallemoresas" ,  controladorCupones.getall)
RouterCupones.get("/actualizar", controladorCupones.navegar);

module.exports  = RouterCupones