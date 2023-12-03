const express = require("express");
const router = express.Router();

const {
  getAllUsersController,
  getSingleUserController,
  showCurrentUserController,
  updateUserController,
  updateUserPasswordController,
} = require("../controllers/userController");

router.route("/").get(getAllUsersController);
router.route("/showMe").get(showCurrentUserController);
router.route("/updateUser").patch(updateUserController);
router.route("/updatePassword").patch(updateUserPasswordController);
router.route("/:id").get(getSingleUserController);

module.exports = router;
