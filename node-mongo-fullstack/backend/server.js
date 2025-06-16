const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/toko", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"));

const barangRoutes = require("./routes/barang");
app.use("/api/barang", barangRoutes);

const pembelianRoutes = require("./routes/pembelian");
app.use("/api/pembelian", pembelianRoutes);

const penjualanRoutes = require("./routes/penjualan");
app.use("/api/penjualan", penjualanRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
