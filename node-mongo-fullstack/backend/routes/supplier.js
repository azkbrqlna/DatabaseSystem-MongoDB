const express = require("express");
const router = express.Router();
const Supplier = require("../models/Supplier");

// CREATE
router.post("/", async (req, res) => {
  try {
    const data = new Supplier(req.body);
    await data.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const data = await Supplier.find();
  res.json(data);
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
