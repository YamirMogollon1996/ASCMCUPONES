const cupones = require("../models/Cupones");

const controladorCupones =  {}

controladorCupones.crear =  async (  req, res) =>{
    return   res.send({
        msg:"error"
    })
}


module.exports = controladorCupones;
