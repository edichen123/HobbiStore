const router = require("express").Router();
const CART = require("../models/CartModel");
const {
  verificationToken,
  verifyAndAuthenticate,
  verifyAndAuthenticateAdmin,
} = require("./VerificationToken");

//create
router.post("/", verificationToken, async (req, res) => {
  const userCart = new CART(req.body);

  try {
    const savedCart = await userCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update
router.put("/:id", verifyAndAuthenticate, async (req, res) => {
  try {
    const updatedCart = await CART.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id", verifyAndAuthenticate, async (req, res) => {
  try {
    await CART.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Cart");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get user cart
router.get("/find/:userID", verifyAndAuthenticate, async (req, res) => {
  try {
    const cart = await CART.findOne({ userID: req.params.userID });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all cart
router.get("/", verifyAndAuthenticateAdmin, async (req, res) => {
  try {
    const allCart = await CART.find();
    res.status(200).json(allCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
