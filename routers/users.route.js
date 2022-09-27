const express = require("express");
const {
  getAllUser,
  getRandomUser,
  createUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/random", getRandomUser);
router.get("/all", getAllUser);
router.post("/save", createUser);

module.exports = router;
