const mongoose = require('mongoose')

const reservasSchema = mongoose.Schema({
    code: String,
    name: String,
    price: Number,
    categories: Array,
})

module.exports = mongoose.model('Reservas', reservasSchema)