const mongoose = require("mongoose");

const penjualanSchema = new mongoose.Schema({
  nama: String,
  jumlah: Number,
  tanggal_penjualan: Date,
});

module.exports = mongoose.model("Penjualan", penjualanSchema);
