const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  nama: String,
  nama_supplier: String,
  alamat: String,
  kode_pos: Number,
});

module.exports = mongoose.model("Supplier", supplierSchema, "supplier");
