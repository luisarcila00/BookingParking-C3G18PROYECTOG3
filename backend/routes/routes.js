const express = require('express')
const router = express.Router()
const passport = require('passport')
const bookingsContoller = require('../controllers/bookings.controller')
const usersContoller = require('../controllers/users.controller')
const UserRegisterController = require('../controllers/UserRegister.controller')
const auth = require('../lib/auth')
const cuposController = require('../controllers/cupos.controller')
const tarifasController = require('../controllers/tarifas.controller')
const vehiculosController = require('../controllers/ingresos.controller')


const helpers = require('../lib/helpers')
//Definir rutas
router.get('/bookings', bookingsContoller.getAll)
router.get('/booking/:code', bookingsContoller.getById)
router.post('/booking', bookingsContoller.create)
//<<<<<<< vselkin
//router.post('/booking/registros', UserRegisterController.create)
//router.put('/booking/:code', bookingsContoller.update)
//router.delete('/booking/:code', bookingsContoller.delete)
//=======
router.put('/booking/:id', bookingsContoller.update)
router.delete('/booking/:id', bookingsContoller.delete)
//>>>>>>> main
router.post('/user', helpers.encryptPassword, usersContoller.create)
router.get('/users', usersContoller.getAll)

router.get("/vehicles",auth.verifyAdministrador, vehiculosController.getAll)
router.post("/vehicle",auth.verifyAdministrador, vehiculosController.create)

router.get("/asignarCupos",auth.verifyAdministrador, cuposController.getAll)
router.get('/asignarCupos/:code',auth.verifyAdministrador, cuposController.getByCode)
router.post('/asignarCupos',auth.verifyAdministrador, cuposController.create)
router.put('/asignarCupos/:code',auth.verifyAdministrador, cuposController.update)
router.delete('/asignarCupos/:code',auth.verifyAdministrador, cuposController.delete)

router.get('/asignarTarifas/',auth.verifyAdministrador, tarifasController.getAll)
router.get('/asignarTarifas/:code',auth.verifyAdministrador, tarifasController.getByCode)
router.post('/asignarTarifas',auth.verifyAdministrador, tarifasController.create)
router.put('/asignarTarifas/:code',auth.verifyAdministrador, tarifasController.update)
router.delete('/asignarTarifas/:code',auth.verifyAdministrador, tarifasController.delete)


router.post('/login', passport.authenticate('local.login', {
    //failureRedirect: '/',
    failureFlash: true,
    session: true,
}), (req, res) => {
    req.user.loggedin = true
    res.status(200).json(req.user)
})

module.exports = router