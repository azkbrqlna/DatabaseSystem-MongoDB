const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/toko_node_latihan1";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Berhasil connect!"))
  .catch((err) => console.log("Gagal connect!", err));

const penjualanSchema = new mongoose.Schema({
  nama: String,
  jumlah: Number,
  tanggal_penjualan: Date,
});

const penjualan = mongoose.model("penjualan", penjualanSchema);

const penjualanBaru = new penjualan({
  nama: "Panadol",
  jumlah: 20,
  tanggal_penjualan: new Date(),
});

penjualanBaru
  .save()
  .then((doc) => console.log("Data berhasil disimpan", doc))
  .catch((err) => console.log("Gagal menyimpan data", err));
