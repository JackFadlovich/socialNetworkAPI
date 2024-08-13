const router = require('express').Router();
const {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser
} = require('../../controllers/userController');
router.route('/')
  .get(getUser)
  .post(createUser);
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  
module.exports = router;
