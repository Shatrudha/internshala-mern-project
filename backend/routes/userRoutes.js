const express = require("express");
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();

// GET logged-in user profile
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.json(user);
});

module.exports = router;
