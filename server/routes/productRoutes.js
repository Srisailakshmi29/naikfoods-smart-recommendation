const express = require("express");

const {
  getProducts,
  getProductById,
  getRecommendations,
} = require("../controllers/productController");

const router = express.Router();

// Get all products
router.get("/products", getProducts);

// Get one product
router.get("/products/:id", getProductById);

// Get personalized recommendations
router.post("/recommendations", getRecommendations);

module.exports = router;