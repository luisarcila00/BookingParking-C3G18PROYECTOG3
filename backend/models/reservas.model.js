const mongoose = require('mongoose')

const reservasSchema = mongoose.Schema({
    code: String,
    username: String,
    date_booking: String,
})

module.exports = mongoose.model('Reservas', reservasSchema)