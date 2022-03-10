const router = require("express").Router();
const USER = require("../models/UserModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// register
router.post("/register", async (req, res) => {
  const newUser = new USER({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await USER.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Username");
    const hashedPw = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
    const OriPassword = hashedPw.toString(CryptoJS.enc.Utf8);

    OriPassword !== req.body.password && res.status(401).json("Wrong Password");
    const JWTAccessToken = jwt.sign(
      {
        id: user._id,
        admin: user.admin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, JWTAccessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

//log out
router.delete("/logout", async (req, res)=>{
  try {
    const logout = await USER.deleteOne
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;
