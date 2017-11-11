const router = require('express').Router();
const passport = require('passport');

let userController = require('./userController.js');

router.post('/login', passport.authenticate('local', {failureRedirect: '/'}), userController.login);
router.post('/register', userController.register);

module.exports = router;
