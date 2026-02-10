const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength : 21,
  },
  emailId: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('invalid email address' + value)
      }
    }
  },
  password: {
    type: String,
    required: true,
    validate(value){
      if (!validator.isStrongPassword(value)) {
        throw new Error('Enter a strong Password')        
      }
    }
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
