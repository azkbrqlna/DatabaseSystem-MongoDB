const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/toko_node_latihan1";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Berhasil connect!"))
  .catch((err) => console.log("Gagal connect!", err));

const customerSchema = new mongoose.Schema({
  nama: String,
  phone: String,
  address: String,
});

const Customer = mongoose.model("Customer", customerSchema);

// simpan data
const customerBaru = new Customer({
  nama: "JunetGanz",
  phone: "089172315672",
  address: "Jl. Kedungmundu No. 1945 , Semarang",
});

customerBaru
  .save()
  .then((doc) => console.log("Data berhasil disimpan", doc))
  .catch((err) => console.log("Gagal menyimpan data", err));
