const router = require('express').Router();
const foodCategories = require('./food-categories')
const groups = require('./groups');
const users = require('./users');

router.use('/food-categories', foodCategories)
router.use('/groups', groups);
router.use('/users', users);

module.exports = router;