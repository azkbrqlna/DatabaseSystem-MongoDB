const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const barangRoutes = require("./routes/barang");
const pembelianRoutes = require("./routes/pembelian");
const penjualanRoutes = require("./routes/penjualan");
const supplierRoutes = require("./routes/supplier");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/toko", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"));

app.use("/api/barang", barangRoutes);
app.use("/api/pembelian", pembelianRoutes);
app.use("/api/penjualan", penjualanRoutes);
app.use("/api/supplier", supplierRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
