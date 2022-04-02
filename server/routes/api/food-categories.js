const router = require('express').Router();
const foodCategoriesController = require('../../controllers/foodCategoriesController');

router
  .route('/')
  .get(foodCategoriesController.findAll)

router
  .route('/:id')
  .get(foodCategoriesController.findById)

router
  .route('/create')
  .post(foodCategoriesController.createFoodCategory)

module.exports = router;