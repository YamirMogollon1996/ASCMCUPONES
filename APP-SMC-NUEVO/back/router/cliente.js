const express =  require("express" )
const ControaldorCliente = require("../controllers/ControladroCliente");
const upload = require("../helpers/Subirimagen");
const {VerifyToken  , verficarPerson} = require("../helpers/VerificarToken");
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




ClienteRouter.get("/ver", VerifyToken, verficarPerson  ,  ControaldorCliente.remoto);
















module.exports = ClienteRouter;