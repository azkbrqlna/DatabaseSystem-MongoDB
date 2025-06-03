const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

router.post("/", async (req, res) => {
  try {
    const customers = new Customer(req.body);
    const saved = await customers.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
