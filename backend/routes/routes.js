const express = require('express')
const router = express.Router()
const passport = require('passport')
const bookingsContoller = require('../controllers/bookings.controller')
const usersContoller = require('../controllers/users.controller')
const UserRegisterController = require('../controllers/UserRegister.controller')

const cuposController = require('../controllers/cupos.controller')
const tarifasController = require('../controllers/tarifas.controller')


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


router.get("/asignarCupos", cuposController.getAll)
router.get('/asignarCupos/:code', cuposController.getByCode)
router.post('/asignarCupos', cuposController.create)
router.put('/asignarCupos/:code', cuposController.update)
router.delete('/asignarCupos/:code', cuposController.delete)

router.get('/asignarTarifas/', tarifasController.getAll)
router.get('/asignarTarifas/:code', tarifasController.getByCode)
router.post('/asignarTarifas', tarifasController.create)
router.put('/asignarTarifas/:code', tarifasController.update)
router.delete('/asignarTarifas/:code', tarifasController.delete)


router.post('/login', passport.authenticate('local.login', {
    //failureRedirect: '/',
    failureFlash: true,
    session: false,
}), (req, res) => {
    req.user.loggedin = true
    res.status(200).json(req.user)
})

module.exports = router