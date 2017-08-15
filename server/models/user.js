const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: function (v) {
      return validator.isEmail(v)
    }
  },
  password: {
    type: String,
    required: true
  }
})

var User = mongoose.model('User', userSchema)

module.exports = User
