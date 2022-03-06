const router = require("express").Router();
const USER = require("../models/UserModel");

// register
router.post("/register", async (req, res) => {
  const newUser = new USER({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
