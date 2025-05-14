const express = require("express");
const { signup, login } = require("../controllers/userController");
const User = require("../models/userModel");
const { requireRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Public route to fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Unable to fetch users" });
  }
});

// Protected route examples
router.get("/admin/dashboard", requireRole("admin"), (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard" });
});

router.get("/user/profile", requireRole("user"), (req, res) => {
  res.json({ message: "Welcome to your profile" });
});

module.exports = router;
