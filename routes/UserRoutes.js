const USER = require("../models/UserModel");
const {
  verificationToken,
  verifyAndAuthenticate,
  verifyAndAuthenticateAdmin,
} = require("./VerificationToken");
const router = require("express").Router();

//update
router.put("/:id", verifyAndAuthenticate, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString();
  }
  try {
    const currentUser = await USER.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(currentUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete
router.delete(":id", verifyAndAuthenticate, async (req, res) => {
  try {
    await USER.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get user
router.get("/find/:id", verifyAndAuthenticateAdmin, async (req, res) => {
  try {
    const user = await USER.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all user
router.get("/", verifyAndAuthenticateAdmin, async (req, res) => {
  try {
    const query = req.query.new;
    const users = query
      ? await USER.find().sort({ _id: -1 }).limit(5)
      : await USER.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
