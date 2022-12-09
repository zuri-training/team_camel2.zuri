
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          
        },
        userName:{
            type: String,
        },
        email: {
          type: String,
          required: [true, "Email address is required."],
          unique: true,
          validate: [validator.isEmail, "Please provide a valid email address."],
        },
        phoneNumber: {
          type: Number,
        },
        password: {
          type: String,
          required: true,
        },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema)