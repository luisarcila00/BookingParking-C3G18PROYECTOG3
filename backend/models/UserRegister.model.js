const mongoose = require('mongoose')
// Estete paso se crea los modelos, indicando los datos que deseamos guardar en la base de datos y el tipo de dato a ser almacenado
const RegisterSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirm_password : String
})

module.exports = mongoose.model('Registros', RegisterSchema)