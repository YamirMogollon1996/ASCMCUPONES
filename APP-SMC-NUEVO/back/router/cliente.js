const express =  require("express" )
const ControaldorCliente = require("../controllers/ControladroCliente")
const ClienteRouter = express.Router()

ClienteRouter.get("/clientecrear", ControaldorCliente.crear);
ClienteRouter.get("/getallDecisison", ControaldorCliente.getallDecisison);
module.exports = ClienteRouter;