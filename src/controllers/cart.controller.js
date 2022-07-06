const express = require("express");
const Bag = require("../models/cart.model");

// const crudController = require("./crud.controller");
const router = express.Router();

var LocalStorage = require("node-localstorage").LocalStorage;

router.get("/:id", async (req, res) => {
  // const userid="61ec0b8b3378d726b033eacf"
  let bag = await Bag.find({ userId: req.params.id }).lean().exec();
  // let bag = await Bag.find({userId:userid}).lean().exec();
  let totalval = 0;
  for (let i = 0; i < bag.length; i++) {
    totalval += bag[i].Price * bag[i].Qty;
  }
  return res.render("cart", { bag, totalval });
});

router.get("/api/:id", async (req, res) => {
  // const userid="61ec0b8b3378d726b033eacf"
  let bag = await Bag.find({ userId: req.params.id }).lean().exec();
  // let bag = await Bag.find({userId:userid}).lean().exec();
  let totalval = 0;
  let quantity = 0;
  for (let i = 0; i < bag.length; i++) {
    totalval += bag[i].Price * bag[i].Qty;
    quantity += bag[i].Qty;
  }

  return res.send({ bag: bag, totalval: totalval, quantity: quantity });
});

// Api to delete the product and return updated list
router.get("/delete/:id", async (req, res) => {
  await Bag.findByIdAndDelete(req.params.id).lean().exec();
  let bag = await Bag.find().lean().exec();
  // 6 users => deleted 1 => when we get all users we get 5 => redirect to index with 5 users
  return res.status(200).send(bag);
});

// Api to update the product increase qty and return updated list
router.patch("/qtyi/:id", async (req, res) => {
  const bag = await Bag.findByIdAndUpdate(req.params.id, { $inc: { Qty: 1 } });

  return res.status(200).send(bag);
});

// Api to update the product decrease qty and return updated list
router.patch("/qtyd/:id", async (req, res) => {
  const bag = await Bag.findByIdAndUpdate(req.params.id, { $inc: { Qty: -1 } });

  return res.status(200).send(bag);
});

module.exports =router;