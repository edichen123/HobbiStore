const ORDER = require("../models/OrderModel");
const {
  verificationToken,
  verifyAndAuthenticate,
  verifyAndAuthenticateAdmin,
} = require("./VerificationToken");
const router = require("express").Router();

//create
router.post("/", verificationToken, async (req, res) => {
  const newOrder = new ORDER(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update
router.put("/:id", verifyAndAuthenticateAdmin, async (req, res) => {
  try {
    const updatedOrder = await ORDER.findByIdAndUpdate(req.params.id);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", verifyAndAuthenticateAdmin, async (req, res) => {
  try {
    await ORDER.findByIdAndDelete(req.params.id);
    res.status(200).json("Order Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// get user order
router.get("/find/:userID", verifyAndAuthenticate, async (req, res) => {
  try {
    const userOrders = await ORDER.find({ userID: req.params.userID });
    res.status(200).json(userOrders);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all
router.get("/", verifyAndAuthenticateAdmin, async (req, res) => {
  try {
    const allUserOrders = await ORDER.find();
    res.status(200).json(allUserOrders);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
