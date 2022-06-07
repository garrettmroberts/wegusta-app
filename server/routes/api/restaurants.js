const router = require('express').Router();
const restaurantsController = require('../../controllers/restaurantsController');

router
  .route('/:category')
  .get(restaurantsController.findRestaurant)

module.exports = router;