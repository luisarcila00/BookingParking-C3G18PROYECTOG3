console.log('Hola a todos estamos listos para iniciar backend')
require('dotenv').config()
//Configuracion del servidor
const express = require('express');
const cors = require('cors'); // habilita la conexion desde cualquier fuente
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Conexion a MongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://larcila:luisarcila00@cluster0.bp4b6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log('Connected to database')
}).catch((err) => console.error(err.message))
//Definir las rutas
app.use('/api', require('./routes/routes'))
//Iniciar servidor
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
