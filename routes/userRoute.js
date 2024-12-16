
const express = require("express");
const { signup, login } = require("../controllers/userController");
const User = require("../models/userModel");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Unable to fetch users" });
  }
});

module.exports = router;

