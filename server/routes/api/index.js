const router = require('express').Router();
const users = require('./users');
const groups = require('./groups');

router.use('/users', users);
router.use('/groups', groups);

module.exports = router;