const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// ✅ Import all route files
const allBakeryRoutes = require("./routes/allbakers");
const cakeRoutes = require("./routes/cakes");
const cupcakeRoutes = require("./routes/cupcakes");
const dessertRoutes = require("./routes/desserts");

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/allbakery", allBakeryRoutes);
app.use("/api/cakes", cakeRoutes);
app.use("/api/cupcakes", cupcakeRoutes);
app.use("/api/desserts", dessertRoutes);

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("🍰 Complete Bakery API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
