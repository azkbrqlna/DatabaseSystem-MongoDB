const express = require("express");
const router = express.Router();
const Barang = require("../models/Barang");

// CREATE
router.post("/", async (req, res) => {
  try {
    const barang = new Barang(req.body);
    await barang.save();
    res.status(201).send(barang);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const data = await Barang.find();
  res.json(data);
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Barang.findByIdAndUpdate(req.params.id, req.body, {
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
    await Barang.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
