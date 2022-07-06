const express = require("express");
const router = express.Router();
const Bag = require("../models/cart.model");

router.post("/", async (req, res) => {
  // console.log(req.body);
  try {
    console.log("aya");
    // const bag = new Bag({
    //   userId: req.body.userId,
    //   productId: req.body._id,
    //   name: req.body.Name,
    //   price: req.body.Price,
    //   Qty: req.body.Qty,
    //   addedAt: { type: Date, default: Date.now },
    // });
    // await bag.save();
    const bag = await Bag.create(req.body);
    console.log(bag);
    return res.status(200).send(bag);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;