const db = require("../coneccion/db");
const{ DataTypes }  =  require("sequelize")


const empresa  = db.define("empresa" ,{
           id : {
            type:DataTypes.INTEGER , 
            allowNull:false , 
            primaryKey: true  ,
            autoIncrement  : true
           } , 
     
           ruc :  {
                    type:DataTypes.STRING , 
              allowNull:false  ,
           }   , 
           direccion :  {
            type:DataTypes.STRING  
           }

}, {
    timestamps:false
})

module.exports  = empresa