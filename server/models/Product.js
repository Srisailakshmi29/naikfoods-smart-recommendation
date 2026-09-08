const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
      min: 1,
    },

    category: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    tags: {
      type: [String],
      default: [],
    },

    taste: {
      type: [String],
      default: [],
    },

    suitableFor: {
      type: [String],
      default: [],
    },

    healthType: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);