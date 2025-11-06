const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["All Bakery", "Cakes", "Cupcakes", "Desserts"], // ✅ Restricted values
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
    },
    discount: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    imagePublicId: {
      type: String,
    },
    features: {
      type: [String],
    },
    specs: {
      flavor: { type: String },
      occasions: { type: [String] },
      weight: { type: String },
    },
  },
  { timestamps: true }
);

// ✅ Create unique index for title (case-insensitive)
productSchema.index(
  { title: 1 },
  { unique: true, collation: { locale: "en", strength: 2 } }
);

// ✅ Index on category for faster filtering
productSchema.index({ category: 1 });

module.exports = mongoose.model("cakes", productSchema);
