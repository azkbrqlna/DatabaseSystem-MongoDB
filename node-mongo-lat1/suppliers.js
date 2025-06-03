const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/toko_node_latihan1";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Berhasil connect!"))
  .catch((err) => console.log("Gagal connect!", err));

const suplierSchema = new mongoose.Schema({
  nama: String,
  nama_supplier: String,
  alamat: String,
  kode_pos: Number,
});

const suplier = mongoose.model("suplier", suplierSchema);

const suplierBaru = new suplier({
  nama: "Panadol",
  nama_supplier: "Kimia Farma",
  alamat: "Semarang",
  kode_pos: 527393,
});

suplierBaru
  .save()
  .then((doc) => console.log("Data berhasil disimpan", doc))
  .catch((err) => console.log("Gagal menyimpan data", err));
