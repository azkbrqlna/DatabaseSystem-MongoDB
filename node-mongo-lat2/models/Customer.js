const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  nama: String,
  phone: String,
  address: String,
});

module.exports = mongoose.model("Customer", customerSchema);
