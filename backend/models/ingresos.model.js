const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    placa: String,
    fecha_ingreso: String,
    fecha_salida: String,
    es_reserva: Boolean
})

module.exports = mongoose.model('registros', Schema)