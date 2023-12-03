const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  getAllUsersController,
  getSingleUserController,
  showCurrentUserController,
  updateUserController,
  updateUserPasswordController,
} = require("../controllers/userController");

router
  .route("/")
  .get(authenticateUser, authorizePermissions("admin"), getAllUsersController);
router.route("/showMe").get(showCurrentUserController);
router.route("/updateUser").patch(updateUserController);
router.route("/updatePassword").patch(updateUserPasswordController);
router
  .route("/:id")
  .get(authenticateUser, authorizePermissions("user"), getSingleUserController);

module.exports = router;
