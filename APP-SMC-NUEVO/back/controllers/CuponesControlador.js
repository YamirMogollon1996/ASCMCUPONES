const db = require("../coneccion/db");
const cupones = require("../models/Cupones");
const empresa = require("../models/Empresa");
const controladorCupones = {};

controladorCupones.crear = async (req, res) => {
  const { totalCupones } = req.body;
  const im = req.file.path;
  try {
    let first = await cupones.create({
      totalCupones,
      ImageCupon: im,
    });

    return res.send({
      msg: "se agrego el cupon",
    });
  } catch (error) {
    console.log({ error: error.message });
  }
};

controladorCupones.getall = async (req, res) => {
  try {
    let primero = await empresa.findAll();
    return res.send(primero);
  } catch (error) {
    return res.send({ error: error.message });
  }
};

controladorCupones.navegar = async (req, res) => {
  let datos = await db.query("select *  from empresa");
  console.log(datos);
};

module.exports = controladorCupones;
