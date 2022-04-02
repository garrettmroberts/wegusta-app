const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      match: /[a-zA-Z0-9!@#$%^&*()?]{8,}/
    },
    firstName: {
      type: String,
      lowercase: true,
      required: true
    },
    lastName: {
      type: String,
      lowercase: true,
      required: true
    }
  }, {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;