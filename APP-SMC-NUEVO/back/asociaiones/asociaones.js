const cupones = require("../models/Cupones");
const empresa = require("../models/Empresa");


//rlacio_shipempres
//empresa laboral __remae__milagros__santana 

empresa.hasMany(cupones,   {
    foreignKey:"id_empresa"
})

cupones.belongsTo( empresa , {
    foreignKey:"id_empresa"
})

