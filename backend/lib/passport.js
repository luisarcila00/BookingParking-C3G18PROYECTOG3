const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    RemembermeStrategy = require('passport-remember-me').Strategy
const User = require('../models/users.model')
const helpers = require('./helpers')
passport.use('local.login', new LocalStrategy((username, password, done) => {
        User.findOne({username: username}).populate("roles", "-__v").exec((err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false, {type: "error", "message": "El usuario no existe."});
            const passwordIsValid = helpers.matchPassword(password, user.password)
            if (!passwordIsValid) return done(null, false, {type: "error", "message": "Contraseña incorrecta."});
            const user_information = {
                id: user._id,
                username: user.username,
                email: user.username,
                roles: user.rol,
            }
            return done(null, user_information);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    User.findById(id.id, function (err, user) {
        done(err, user);
    });
});