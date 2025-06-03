const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/toko_node_latihan1";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Berhasil connect!"))
  .catch((err) => console.log("Gagal connect!", err));

const pembelianSchema = new mongoose.Schema({
  nama: String,
  jumlah: Number,
  supplier: String,
  tanggal_pembelian: Date,
});

const Pembelian = mongoose.model("Pembelian", pembelianSchema);

const pembelianBaru = new Pembelian({
  nama: "Panadol",
  jumlah: 10,
  supplier: "Kimia Farma",
  tanggal_pembelian: new Date(),
});

pembelianBaru
  .save()
  .then((doc) => console.log("Data berhasil disimpan", doc))
  .catch((err) => console.log("Gagal menyimpan data", err));
