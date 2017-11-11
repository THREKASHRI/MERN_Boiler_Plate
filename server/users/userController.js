const User = require('./userEntity');

let userCtrl = {

    // Login
    login: function(req, res) {
        res.send(req.user);
    },
    register: function(req, res) {
        let newUser = new User();
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.save(function(err) {
            if (err) {
                res.send('Error in registration');
            } else {
              res.send('User saved successfully');
            }

        });
    }
  }

  module.exports = userCtrl;
