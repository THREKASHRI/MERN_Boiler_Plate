const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('../users/userEntity');

passport.serializeUser(function(user, done) {
 done(null, user);
});

passport.deserializeUser(function(id, done) {
  users.findById(id, function(err, user) {
   done(err, user);
  });
});


passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done) {
        process.nextTick(function() {
          users.findOne({
                email: email,
                password: password
            }, function(err, user) {
              if(err){
                return done(null, err);
                }
              else{
                return done(null, user);
                }
            });
        });
    }));

module.exports = passport;
