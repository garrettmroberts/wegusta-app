const router = require('express').Router();
const restaurants = require('./restaurants')
const foodCategories = require('./food-categories')
const groups = require('./groups');
const users = require('./users');

router.use('/restaurants', restaurants)
router.use('/food-categories', foodCategories)
router.use('/groups', groups);
router.use('/users', users);

module.exports = router;