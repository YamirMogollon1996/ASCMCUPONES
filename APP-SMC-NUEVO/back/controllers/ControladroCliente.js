const db = require("../coneccion/db");
const {
  GetallPersonasUnionCupones,
  getallEmpresaUnionCupones,
  BuscarSinlgeasyn,
  Obtenefuncion,
} = require("../db/querydb");
// const GetallPersonasUnionCupones = require("../db/querydb");
// const { GetallPersonasUnionCupones } = require("../db/querydb");
const cliente = require("../models/cliente");
const cupones = require("../models/Cupones");
const empresa = require("../models/Empresa");
const Personas = require("../models/Persona");

// const { v4 } = require("uuid");
// GetallPersonasUnionCupones

const ControaldorCliente = {};
ControaldorCliente.crear = async (req, res) => {
  const { nombre_cliente, tipo_cliente, ruc, direccion, id_empresa } = req.body;
  const datos = await cliente.findAll();
  const count = datos.length;

  try {
    let data = await cliente.create({
      id_cliente: count + 1,
      nombre_cliente: nombre_cliente,
      tipo_cliente: tipo_cliente,
    });

    // console.log();

    if (tipo_cliente === "empresa") {
      await empresa.create({
        ruc,
        direccion,
        id_empresa: data.id_cliente,
      });
      await cupones.create({
        totalCupones: 1,
        ImageCupon: "",
        id_cliente: data.id_cliente,
      });
      return res.send({
        msg: "se incgreso la empresa",
      });
    } else {
      await Personas.create({
        direccion,
        RUC: ruc,
        dni: "222",
        id_cliente: data.id_cliente,
      });

      await cupones.create({
        totalCupones: 1,
        ImageCupon: "",
        id_cliente: data.id_cliente,
      });

      return res.send({
        msg: "se incgreso la persona",
      });
    }
  } catch (error) {
    return res.send({
      error: error.message,
    });
  }
};


ControaldorCliente.getallDecisison = async (req, res) => {
  try {
    let query = await db.query(GetallPersonasUnionCupones);
    console.log(query);
    if (query[0].length === 0) {
      return res.send({
        msg: "ok",
        data: "vacio",
      });
    }
    return res.send({
      msg: "ok",
      data: query[0],
    });
  } catch (error) {
    return res.send({
      error: error.message,
    });
  }
};

ControaldorCliente.details = async (req, res) => {
  
  const { id } = req.params;  
   try {
          const filOne =  await cliente.findOne({
            where:  { 
              id_cliente  : id
            } 
            , 
            include:  [
              {
                model:cupones
              }  
              ,
            ]  
          
          })
          const Clinete = await Personas.findOne({
            where:  { 
              id_cliente  : id 
            }
          })
          let data =  [filOne , Clinete]
         if ( filOne ===  0)  return res.send({msg:"vacio"})
          return res.send(  {
          filOne , 
          Clinete
          })
          
    } catch (error) {
    return res.send({
      msg: error.message
    });
  }

};


ControaldorCliente.actualizar = async (  req, res  ) => {
  
  const { valorquemepasaFronte } = req.body;
  

    try {
      
      const { id ,  numero}  =  req.params   
      //  const FindId = cliente
         
       const upadte = await cupones.update(
         {
           totalCupones: valorquemepasaFronte,
         },
         {
           where: { id_cliente: id },
         }
       );
      return res.send({
        msg:"mogollon"  ,
        reusltado : "se acatualico la consulta"
      })
    } catch (error) {
        return res.send({
          error:error.message
        })
    }
};
module.exports = ControaldorCliente;
