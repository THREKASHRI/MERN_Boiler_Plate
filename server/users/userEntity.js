const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const schema = new mongoose.Schema({
  email: String,
  password: String
});
let User = mongoose.model('user', schema);
module.exports = User;
