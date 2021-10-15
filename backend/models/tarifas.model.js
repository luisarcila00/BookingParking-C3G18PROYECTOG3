const mongoose = require("mongoose");

const tarifasSchema = mongoose.Schema ({

    code:Number,
    unoAQuince: Number,
    quinceATreinta: Number,
    treintaACuarentaycinco: Number,
    cuarentaycincoASesenta: Number,
    hora: Number,
    dosHoras: Number,
    tresHoras: Number,
    tresAOcho: Number,
    adicional: Number,
    dia: Number,
    mes: Number

})

module.exports = mongoose.model("Tarifas", tarifasSchema);

