const mongoose = require("mongoose");

const barangSchema = new mongoose.Schema({
  nama: String,
  stok: Number,
  harga_beli: Number,
  harga_jual: Number,
  jenis_barang: String,
  variasi: Array,
  keterangan: String,
});

module.exports = mongoose.model("Barang", barangSchema);
