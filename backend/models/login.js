const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},


});

module.exports = mongoose.model('Login',loginSchema);
