const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  // YOU DO: Define properties of food schema
});



const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: {
// YOU DO: embed foodSchema here
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
