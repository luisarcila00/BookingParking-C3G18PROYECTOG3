
module.exports = {
    verifyUsuario: async(req, res, next) => {
        if (!req.user) {
            return res.status(404).send({
                message: 'Debe iniciar sesión'
            });
        }
        if (req.user._doc.rol == 'Administrador' || req.user._doc.rol == 'usuario') {
            next();
        } else {
            return res.status(401).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAdministrador: async(req, res, next) => {
        if (!req.user) {
            return res.status(404).send({
                message: 'Debe iniciar sesión'
            });
        }
        if (req.user._doc.rol == 'Administrador') {
            next();
        } else {
            return res.status(401).send({
                message: 'No autorizado'
            });
        }
    },
}