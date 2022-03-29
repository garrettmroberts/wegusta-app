const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
     users: {
       type: Array,
       required: true
     },
     preferences: {
       type: Array,
       required: true
     }
  }, {
    timestamps: true
  }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;