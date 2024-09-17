const db = require("../coneccion/db");
const   { DataTypes} = require("sequelize")


const Personas = db.define(
  "personas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    direccion  :  {
        type:DataTypes.STRING
    } ,

    RUC: {
      type: DataTypes.STRING,
    },
    dni: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports =  Personas