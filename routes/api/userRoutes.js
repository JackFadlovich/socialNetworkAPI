const router = require('express').Router();
const {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend
} = require('../../controllers/userController');
router.route('/')
  .get(getUser)
  .post(createUser);
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
  router.route('/:id/friends/:friendId')
  .post(addFriend);

  
module.exports = router;
