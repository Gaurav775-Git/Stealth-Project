const express = require("express");
const bcrypt = require("bcryptjs");
const User = require('../models/userModel');

const router = express.Router();

// SIGNUP
router.post("/api/signup", async (req, res) => {
  const {name, email, password, college, semester} = req.body;

  const hash = await bcrypt.hash(password, 10);
  await User.create({ 
    name,
    email,
    password: hash,
    college,
    semester
  });

  res.send("Signup done");
});

// LOGIN
router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.send("User not found");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.send("Wrong password");

  res.send("Login success");
});

module.exports = router;
