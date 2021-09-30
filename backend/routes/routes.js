const express = require('express')
const router = express.Router()
const bookingsContoller = require('../controllers/bookings.controller')
//Definir rutas
router.get('/bookings', bookingsContoller.getAll)
router.get('/booking/:code', bookingsContoller.getById)
router.post('/booking', bookingsContoller.create)
router.put('/booking/:code', bookingsContoller.update)
router.delete('/booking/:code', bookingsContoller.delete)

module.exports = router