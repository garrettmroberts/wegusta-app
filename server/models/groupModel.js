const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GroupUserSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  preferences: {
    type: Array,
    default: []
  }
})

const groupSchema = new Schema({
  users: {
    type: [GroupUserSchema],
    default: []
  },
  groupPreferences: {
    type: Array
  }
}, {
    timestamps: true
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;