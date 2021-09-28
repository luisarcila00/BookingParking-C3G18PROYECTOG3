const express = require('express')
const router = express.Router()
const reservasContoller = require('../controllers/reservas.controller')
//Definir rutas
router.get('/products', reservasContoller.getAll)
router.get('/products/:code', reservasContoller.getById)
router.post('/products', reservasContoller.create)
router.put('/products/:code', reservasContoller.update)
router.delete('/products/:code', reservasContoller.delete)

module.exports = router