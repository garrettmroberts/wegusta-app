const router = require('express').Router();
const userController = require('../../controllers/userController');

router
  .route('/')
  .get(userController.findAll)

router
  .route('/:phoneNumber')
  .get(userController.findUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser)

router
  .route('/create')
  .post(userController.createUser)


module.exports = router;