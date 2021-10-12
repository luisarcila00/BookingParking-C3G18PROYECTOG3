const express = require('express')
const router = express.Router()
const passport = require('passport')
const bookingsContoller = require('../controllers/bookings.controller')
const usersContoller = require('../controllers/users.controller')
const UserRegisterController = require('../controllers/UserRegister.controller')
const ingresosController = require('../controllers/ingresos.controller')

const helpers = require('../lib/helpers')
const auth = require('../lib/auth')
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
router.post('/user', auth.verifyAdministrador, helpers.encryptPassword, usersContoller.create)
router.get('/users', auth.verifyAdministrador, usersContoller.getAll)


router.post('/logout', (req, res) => {
    req.logOut();
    if (req.session.username) {
        req.session.destroy()
    }
    res.status(200).json({message:'se cerro la sesión con exito'})
})
router.post('/login', passport.authenticate('local.login', {
    //failureRedirect: '/',
    failureFlash: true,
    session: true,
}), (req, res) => {
    req.user.loggedin = true
    res.status(200).json(req.user)
})


router.post('/vehicle', auth.verifyAdministrador,  ingresosController.create)

module.exports = router