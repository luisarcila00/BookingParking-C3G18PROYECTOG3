const mongoose = require('mongoose')

const cuposSchema = mongoose.Schema({
    code: String,
    totalCup: Number,
    reservadosCup: Number,
    carroCup: Number,
    motoCup: Number

})

module.exports = mongoose.model('Cupos', cuposSchema)