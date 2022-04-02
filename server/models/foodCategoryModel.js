const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodCategorySchema = new Schema(
  {
    category: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  }
);

const FoodCategory = mongoose.model("FoodCategory", foodCategorySchema);

module.exports = FoodCategory;