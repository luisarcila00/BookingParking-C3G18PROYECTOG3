const mongoose = require('mongoose')
// Estete paso se crea los modelos, indicando los datos que deseamos guardar en la base de datos y el tipo de dato a ser almacenado
const reservasSchema = mongoose.Schema({
    code: String,
    username: String,
    date_booking: String,
})

module.exports = mongoose.model('Reservas', reservasSchema)