const db = require("../coneccion/db");
const {  DataTypes } = require("sequelize")


const cupones = db.define("cupones" ,  {

       id:{
        type:DataTypes.INTEGER  , 
        primaryKey:true
       } ,
       totalCupones :  {

        type:DataTypes.INTEGER
       }  ,
       ImageCupon : {
        type:DataTypes.STRING
       }


},{
    timestamps: false
})

module.exports =  cupones