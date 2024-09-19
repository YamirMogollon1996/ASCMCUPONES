const express =  require("express" )
const ControaldorCliente = require("../controllers/ControladroCliente");
const upload = require("../helpers/Subirimagen");
const ClienteRouter = express.Router()


ClienteRouter.post(
  "/clientecrear",
  upload.single("ImageCupon"),
  ControaldorCliente.crear
);

ClienteRouter.get("/getallDecisison", 
ControaldorCliente.getallDecisison);
ClienteRouter.get("/Single/:id" ,  ControaldorCliente.details)
// ClienteRouter.put("/empresa/:nombre", ControaldorCliente.empresa);
ClienteRouter.put("/actualizar/:id", ControaldorCliente.actualizar);






module.exports = ClienteRouter;