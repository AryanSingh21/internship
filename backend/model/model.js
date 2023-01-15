const mongoose = require("mongoose");
const validator = require("validator");
const connectDatabase = require("./connectDatabase");
const memberDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  phone: {
    type: Number,
    required: [true, "phone number required!"],
    max: 10,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "plese enter valid email"],
  },
  hobbies: {
    type: String,
    maxLength: [20, "charater limit is 20"],
  },
});
// connectDatabase();
module.exports = mongoose.model("Member", memberDetailSchema);
