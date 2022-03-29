const router = require('express').Router();
const groupController = require('../../controllers/groupController');

router
  .route('/')
  .get(groupController.findAll)

router
  .route('/:id')
  .get(groupController.findGroup)

router
  .route('/:groupId/adduser/:userId')
  .put(groupController.addUser)


router
  .route('/create')
  .post(groupController.createGroup)




module.exports = router;