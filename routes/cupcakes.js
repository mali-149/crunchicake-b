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

// ✅ Cupcakes routes (filtered and restricted by category)
router.get("/", getProductsByCategory("Cupcakes"));
router.get("/:id", getProductById("Cupcakes")); // ✅ Only Cupcakes category
router.post("/", upload.single("image"), createProduct("Cupcakes"));
router.put("/:id", upload.single("image"), updateProduct("Cupcakes")); // ✅ Only Cupcakes category
router.delete("/:id", deleteProduct("Cupcakes")); // ✅ Only Cupcakes category

module.exports = router;
