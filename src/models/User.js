const mongoose = require(`mongoose`);
const validator = require(`validator`);
const Collection = require("./Collection");
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }, 

  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail) {
        throw new Error("Must be a properly formatted email")
      }
    }
  }, 

  password: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 7 ) {
        throw new Error("Password must be at least 8 characters long")
      }
      if (value.includes("password")) {
        throw new Error("Your password cannot contain the word 'password'")
      }
    }
  }, 

  collections: [
    {
      type: ObjectId,
      ref: "Collection"
    }
  ]

})

const User = new mongoose.model("User", userSchema);

module.exports = User;