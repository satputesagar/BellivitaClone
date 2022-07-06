const express = require("express");
const Add = require("../models/address.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const address = await Add.create(req.body);
    return res.send({ status: true });
  } catch (err) {
    return res.send({ status: false, message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const address = await Add.findOne({ user_id: req.params.id }).lean().exec();
    return res.send({ status: true, address: address });
  } catch (err) {
    return res.send({ status: false, message: err.message });
  }
});

module.exports = router;