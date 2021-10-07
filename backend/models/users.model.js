const mongoose = require('mongoose')
// Estete paso se crea los modelos, indicando los datos que deseamos guardar en la base de datos y el tipo de dato a ser almacenado
const usersSchema = mongoose.Schema({
    email: String,
    password: String,
    creation_date: String,
    roles: String,
    is_loggued: String,
    full_name: String,
    phone: Number,
    address: String,
    is_loggued: String,
    is_loggued: String,
})

module.exports = mongoose.model('Users', usersSchema)