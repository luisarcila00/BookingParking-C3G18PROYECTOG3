const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    RemembermeStrategy = require('passport-remember-me').Strategy
const db = require("../models/users.model");
const User = db;

passport.use('local', new LocalStrategy((username, password, done) => {
        User.findOne({username: username}).populate("roles", "-__v")
            .exec((err, user) => {
                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false, {message: 'Incorrect username.'});
                }

                var passwordIsValid = bcrypt.compareSync(
                    password,
                    user.password
                );

                if (!passwordIsValid) {
                    return done(null, false, {message: 'Incorrect password.'});
                }

                var authorities = [];

                for (let i = 0; i < user.roles.length; i++) {
                    authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
                }


                // user details
                const user_information = {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    roles: authorities,
                }

                return done(null, user_information);
            });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});