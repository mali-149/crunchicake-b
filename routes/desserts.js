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

// ✅ Desserts routes (filtered and restricted by category)
router.get("/", getProductsByCategory("Desserts"));
router.get("/:id", getProductById("Desserts")); // ✅ Only Desserts category
router.post("/", upload.single("image"), createProduct("Desserts"));
router.put("/:id", upload.single("image"), updateProduct("Desserts")); // ✅ Only Desserts category
router.delete("/:id", deleteProduct("Desserts")); // ✅ Only Desserts category

module.exports = router;
