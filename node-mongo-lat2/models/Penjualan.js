const mongoose = require("mongoose");

const penjualanSchema = new mongoose.Schema({
  nama: String,
  jumlah: Number,
  supplier: String,
  tanggal_penjualan: Date,
});

module.exports = mongoose.model("Penjualan", penjualanSchema);
