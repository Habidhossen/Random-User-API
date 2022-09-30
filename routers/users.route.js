const express = require("express");
const {
  getAllUser,
  getRandomUser,
  createUser,
  updateUser,
  updateMultipleUser,
  deleteUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/random", getRandomUser);
router.get("/all", getAllUser);
router.post("/save", createUser);
router.patch("/update/:id", updateUser);
router.patch("/bulk-update/:id", updateMultipleUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
