const express = require("express");
const mongoose = require("mongoose");
const barangs = require("./routes/barangs");

const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/toko-node-latihan2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Berhasil terhubung ke MongoDB");
  })
  .catch((err) => {
    console.error("Error terhubung ke MongoDB", err);
  });

// routes
app.use("/barang", barangs);

// jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
