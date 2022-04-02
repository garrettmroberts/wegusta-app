const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.FoodCategory.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json(err));
  },

  findById: (req, res) => {
    db.FoodCategory.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json({
        code: 404,
        cause: 'Id is incorrect'
  }))},

  createFoodCategory: (req, res) => {
    db.FoodCategory.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json(err));
  }
};
