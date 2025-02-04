const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
role: {
    type: String,
    //required: true,
  },
  imageLink: {
    type: String,
    //required: true
  },
  
  isValidated : {
    type: Boolean,

  }
});

module.exports = mongoose.model("user", UserSchema);