const express = require("express");
const multer = require("multer");
const {
  getProductsByCategory,
  getProductById, // ✅ Category-restricted version
  createProduct,
  updateProduct, // ✅ Category-restricted version
  deleteProduct, // ✅ Category-restricted version
} = require("../controller/allbakerscont");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// ✅ Cakes routes (filtered and restricted by category)
router.get("/", getProductsByCategory("Cakes"));
router.get("/:id", getProductById("Cakes")); // ✅ Only Cakes category
router.post("/", upload.single("image"), createProduct("Cakes"));
router.put("/:id", upload.single("image"), updateProduct("Cakes")); // ✅ Only Cakes category
router.delete("/:id", deleteProduct("Cakes")); // ✅ Only Cakes category

module.exports = router;
