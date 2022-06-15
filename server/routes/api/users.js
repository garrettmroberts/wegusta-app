const router = require('express').Router();
const userController = require('../../controllers/userController');

router
  .route('/')
  .get(userController.findAll)

router
  .route('/:id')
  .post(userController.createUser)
  .get(userController.findUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser)

router
  .route('/create')
  


module.exports = router;