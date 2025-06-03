const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/toko_node_latihan1";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Berhasil connect!"))
  .catch((err) => console.log("Gagal connect!", err));

const BarangSchema = new mongoose.Schema({
  nama: String,
  stok: Number,
  harga_beli: Number,
  harga_jual: Number,
  jenis_barang: String,
  variasi: Array,
  keterangan: String,
});

const Barang = mongoose.model("Barang", BarangSchema);

// simpan data
const barangBaru = new Barang({
  nama: "Panadol",
  stok: 36,
  harga_beli: 8500,
  harga_jual: 9500,
  jenis_barang: "obat-obatan",
  variasi: [
    { warna: "Biru", berat: "10 gr" },
    { warna: "Merah", berat: "15 gr" },
  ],
  deskripsi: "Obat pereda sakit flu dan batuk, serta meredakan nyeri",
});

barangBaru
  .save()
  .then((doc) => console.log("Barang berhasil disimpan", doc))
  .catch((err) => console.log("Gagal menyimpan barang", err));
