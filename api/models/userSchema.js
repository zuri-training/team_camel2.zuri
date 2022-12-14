
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
        nameOfOrganisation: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: [true, "Email address is required."],
          unique: true,
          validate: [validator.isEmail, "Please provide a valid email address."],
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