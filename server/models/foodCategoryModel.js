const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String
    }
  }, {
    timestamps: true
  }
);

const FoodCategory = mongoose.model("FoodCategory", foodCategorySchema);

module.exports = FoodCategory;